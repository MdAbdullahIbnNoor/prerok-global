import { FacebookProvider, CustomChat } from 'react-facebook';

const ChatBot = () => {
    return (
        <FacebookProvider appId="123456789" chatSupport>
            <CustomChat pageId="260428917145639" minimized={false} />
        </FacebookProvider>
    );
};

export default ChatBot;