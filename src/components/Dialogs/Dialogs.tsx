import React from "react";
import s from "./Dialogs.module.css"

export const Dialogs = () => {
    return (
        <div className={s.dialogs_wrapper}>
            <div className={s.dialogs_items}>
                <div className={s.dialog}>
                    Пётр
                </div>
                <div className={s.dialog}>
                    Владимир
                </div>
                <div className={s.dialog}>
                    Иосиф
                </div>
                <div className={s.dialog}>
                    Борис
                </div>
                <div className={s.dialog}>
                    Владимир
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Привет</div>
                <div className={s.message}>Как дела</div>
                <div className={s.message}>Нормально?</div>
                <div className={s.message}>Нормально, не реально</div>
                <div className={s.message}>так точно</div>
            </div>
        </div>
    );
};

