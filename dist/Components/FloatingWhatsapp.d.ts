import React from 'react';
interface FloatingWhatsAppProps {
    phoneNumber: string;
    accountName: string;
    height?: number;
    avatar?: string;
    statusMessage?: string;
    chatMessage?: string;
    defaultMessage?: string;
    darkMode?: boolean;
    allowClickAway?: boolean;
    allowEsc?: boolean;
    styles?: React.CSSProperties;
    className?: string;
    placeholder?: string;
    notification?: boolean;
    notificationDelay?: number;
    notificationSound?: boolean;
    callbackOpen?: Function;
}
export default function FloatingWhatsApp({ phoneNumber, accountName, height, avatar, statusMessage, defaultMessage, chatMessage, darkMode, allowClickAway, allowEsc, styles, className, placeholder, notification, notificationDelay, // 3 minutes
notificationSound, callbackOpen }: FloatingWhatsAppProps): JSX.Element;
export {};
