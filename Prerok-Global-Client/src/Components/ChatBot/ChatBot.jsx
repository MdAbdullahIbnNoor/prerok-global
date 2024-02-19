import { FacebookProvider, CustomChat } from 'react-facebook';

const ChatBot = () => {
    return (
        <FacebookProvider appId="904560501048331" chatSupport>
            <CustomChat pageId="260428917145639" minimized={false} />
        </FacebookProvider>
    );
};

export default ChatBot;