// firebase/notifications.ts
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { ref, set, get, remove } from 'firebase/database';
import { rtdb } from './firebaseConfig';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export async function registerForPushNotifications(familyUid: string) {
  if (!Device.isDevice) {
    return null; // push notifications don't work on simulators/emulators
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    return null; // user denied permission
  }

  const tokenData = await Notifications.getExpoPushTokenAsync();
  const token = tokenData.data;

  // sanitize token to use as an RTDB key (Firebase keys can't contain . $ # [ ] /)
  const safeKey = token.replace(/[.$#\[\]/]/g, '_');

  await set(ref(rtdb, `pushTokens/${familyUid}/${safeKey}`), token);

  return token;
}

export async function unregisterPushToken(familyUid: string, token: string) {
  const safeKey = token.replace(/[.$#\[\]/]/g, '_');
  await remove(ref(rtdb, `pushTokens/${familyUid}/${safeKey}`));
}

export async function sendChoreAddedNotification(familyUid: string, choreName: string, senderToken: string | null) {
  const snapshot = await get(ref(rtdb, `pushTokens/${familyUid}`));
  if (!snapshot.exists()) return;

  const tokens: string[] = Object.values(snapshot.val());
  const recipients = tokens.filter((t) => t !== senderToken); // don't notify the device that added it

  if (recipients.length === 0) return;

  const messages = recipients.map((to) => ({
    to,
    sound: 'default',
    title: 'New Chore Added',
    body: `"${choreName}" was added to your family's chores`,
  }));

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(messages),
  });
}