import Image from "next/image";
import {useTranslations} from "next-intl";

export default function Home() {
      const t = useTranslations("Index")

    return (
        <section className={`bg-gray-200 p-5 flex-1`}>
            <h2>
                {t("title")}
            </h2>
            <p> {t("desc")} </p>
        </section>
    );
}
