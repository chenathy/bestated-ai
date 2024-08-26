import { useNavigate } from 'react-router-dom';

const usePageNavigation = () => {

    const navigate = useNavigate();

    const handlePageNavigation = (page) => {
        const pagePrefix = `/${page}`;
        navigate(pagePrefix);
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
    };

    return handlePageNavigation;
};

export default usePageNavigation;