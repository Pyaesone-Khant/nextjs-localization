import React from 'react';
import {useTranslations} from "next-intl";

const AboutPage = () => {

    const t = useTranslations("About")

    return (
        <section className={`space-y-3`}>
            <h2 className={`text-lg font-semibold`}>
                {t("title")}
            </h2>
            <p>{t("desc")}</p>
            <p>{t("content")}</p>
        </section>
    );
};

export default AboutPage;
