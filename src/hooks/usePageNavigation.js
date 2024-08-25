import { useNavigate } from 'react-router-dom';

const usePageNavigation = () => {

    const navigate = useNavigate();

    const handlePageNavigation = (page) => {
        const pagePrefix = `/${page}`;
        navigate(pagePrefix);
        window.scrollTo(0, 0);
    };

    return handlePageNavigation;
};

export default usePageNavigation;