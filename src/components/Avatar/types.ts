import React from 'react';

export interface AvatarProps {

    image?: any;
    initials?: string;
    size?: number;
    backgroundColor?: string;
    borderColor?: string;
    onPress?: () => void;

}