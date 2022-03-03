import { useCallback, useEffect, useState } from 'react';

const Modal = (props) => {
    const { open, setOpen } = props;

    const [top, setTop] = useState(0);

    const scrollYDetected = useCallback(() => {
        const { scrollY } = window;
        setTop(scrollY);
    }, []);

    const escapeKeyDown = useCallback((e) => {
        if (e.code === "Escape") {
            setOpen(false);
        };
    }, [setOpen]);

    const addDocEvent = useCallback(() => {
        document
            .addEventListener('scroll',
                scrollYDetected, false);
        document
            .addEventListener('keydown',
                escapeKeyDown, false);
    }, [scrollYDetected, escapeKeyDown]);

    const removeDocEvent = useCallback(() => {
        document
            .removeEventListener('scroll',
                scrollYDetected, false);
        document
            .removeEventListener('keydown',
                escapeKeyDown, false);
    }, [scrollYDetected, escapeKeyDown]);

    useEffect(() => {
        if (open) {
            const { scrollY } = window;
            setTop(scrollY);
        }
        return () => { };
    }, [open]);

    useEffect(() => {
        if (open) {
            addDocEvent();
            return removeDocEvent
        };
    }, [open, addDocEvent, removeDocEvent]);

    const backGroundClick = (e) => {
        const { target: { id } } = e;
        if (id === "modal-background") {
            setOpen(false);
        };
    };

    return (
        <div id="modal-background"
            className={open ? 'modal-open' : 'modal'}
            style={{ top: top }}
            onClick={backGroundClick}>
            <div className='modal-body'>
                {props.children}
            </div>
        </div>
    );
};

export default Modal;