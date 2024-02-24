import {useTranslations} from "next-intl";

export default function Home() {
      const t = useTranslations("Index")

    return (
        <section className={`flex-1 space-y-3`}>
            <h2 className={`text-lg font-semibold`} >
                {t("title")}
            </h2>
            <p> {t("desc")} </p>
            <p className={`text-gray-500`} > {t("intro")} </p>
        </section>
    );
}
