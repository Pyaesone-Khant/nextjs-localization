import React from 'react';
import {useTranslations} from "next-intl";

const ContactPage = () => {

    const t = useTranslations("Contact")

    return (
        <section className={`space-y-3`}>
            <h2 className={`text-lg font-semibold`}>
                {t("title")}
            </h2>
            <p>{t("desc")}</p>
        </section>
    );
};

export default ContactPage;
