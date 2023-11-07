import React, {useEffect} from 'react';
import drift from 'drift-zoom';

const Bot = () => {
    // useEffect(() => {
    //     drift.identify({userId: '12345', email: 'user@example.com'});
    //     drift.show();
    // }, []);
    return (
        <div className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce">
            {/* <a href="https://showkat.info/wa.me/+8801572133260"> */}
            <a href="https://web.whatsapp.com/" target='_blank'>
                <ion-icon name="chatbubble-ellipses"></ion-icon>
            </a>
        </div>
    );
};

export default Bot;
