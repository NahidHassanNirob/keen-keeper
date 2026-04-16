import FriendsProvider from '@/context/friendsContext';
import React from 'react';

const Provider = ({children}) => {
    return (
       <FriendsProvider>{children}</FriendsProvider>
    );
};

export default Provider;