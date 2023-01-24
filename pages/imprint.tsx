import Head from "next/head";
import styles from "./index.module.css";
import Footer from "../lib/Footer";
import HeaderWebsite from "../lib/HeaderWebsite";
import classNames from "classnames";

export default () => {
  return (
    <>
      <Head>
        <title>
          Imprint - ResumerX enhancer - Make your CV better with AI - Powered by
          OpenAI's GPT-3
        </title>
      </Head>
      <HeaderWebsite withButton={false} />

      <main className={classNames(styles.main, styles.fullPage)}>
        <h1>Imprint</h1>

        <section className={styles.sections} style={{ textAlign: "left" }}>
          <h3>Hans-Christian Reinl Internetdienstleistungen</h3>
          <p>Einzelunternehmer</p>
          <p>
            Memelstr. 2<br />
            35606 Solms
            <br />
            Germany
          </p>
          <p>
            Inhaber: Hans-Christian Reinl
            <br />
            Inhaltliche Verantwortlichkeit für diese Website: Hans-Christian
            Reinl
          </p>
          <h3>Kontakt</h3>
          <p>
            Hans Christian Reinl
            <br />
            <a href="mailto:info@drublic.de">info@drublic.de</a>
            <br />
            +49 176 44508482
          </p>
          <p>
            Finanzamt Wetzlar
            <br />
            Ust-IdNr.: DE288406427
          </p>
          <h3>Allgemeine Datenschutzerklärung</h3>
          <p>
            Durch die Nutzung unserer Website erklären Sie sich mit der
            Erhebung, Verarbeitung und Nutzung von Daten gemäß der nachfolgenden
            Beschreibung einverstanden. Unsere Website kann grundsätzlich ohne
            Registrierung besucht werden. Dabei werden Daten wie beispielsweise
            aufgerufene Seiten bzw. Namen der abgerufenen Datei, Datum und
            Uhrzeit zu statistischen Zwecken auf dem Server gespeichert, ohne
            dass diese Daten unmittelbar auf Ihre Person bezogen werden.
            Personenbezogene Daten, insbesondere Name, Adresse oder
            E-Mail-Adresse werden soweit möglich auf freiwilliger Basis erhoben.
            Ohne Ihre Einwilligung erfolgt keine Weitergabe der Daten an Dritte.
          </p>
          <h3>Datenschutzerklärung für Cookies</h3>
          <p>
            Unsere Website verwendet Cookies. Das sind kleine Textdateien, die
            es möglich machen, auf dem Endgerät des Nutzers spezifische, auf den
            Nutzer bezogene Informationen zu speichern, während er die Website
            nutzt. Cookies ermöglichen es, insbesondere Nutzungshäufigkeit und
            Nutzeranzahl der Seiten zu ermitteln, Verhaltensweisen der
            Seitennutzung zu analysieren, aber auch unser Angebot
            kundenfreundlicher zu gestalten. Cookies bleiben über das Ende einer
            Browser-Sitzung gespeichert und können bei einem erneuten
            Seitenbesuch wieder aufgerufen werden. Wenn Sie das nicht wünschen,
            sollten Sie Ihren Internetbrowser so einstellen, dass er die Annahme
            von Cookies verweigert.
          </p>
          <h3>Datenschutzerklärung für Google Analytics</h3>
          <p>
            Unsere Website verwendet Google Analytics, einen Webanalysedienst
            von Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043,
            USA. Zur Deaktivierung von Google Analytiscs stellt Google unter{" "}
            <a href="http://tools.google.com/dlpage/gaoptout?hl=de">
              http://tools.google.com/dlpage/gaoptout?hl=de
            </a>{" "}
            ein Browser-Plug-In zur Verfügung. Google Analytics verwendet
            Cookies. Das sind kleine Textdateien, die es möglich machen, auf dem
            Endgerät des Nutzers spezifische, auf den Nutzer bezogene
            Informationen zu speichern. Diese ermöglichen eine Analyse der
            Nutzung unseres Websitangebotes durch Google. Die durch den Cookie
            erfassten Informationen über die Nutzung unserer Seiten
            (einschließlich Ihrer IP-Adresse) werden in der Regel an einen
            Server von Google in den USA übertragen und dort gespeichert. Wir
            weisen darauf hin, dass auf dieser Website Google Analytics um den
            Code „gat._anonymizeIp();“ erweitert wurde, um eine anonymisierte
            Erfassung von IP-Adressen (sog. IP-Masking) zu gewährleisten. Ist
            die Anonymisierung aktiv, kürzt Google IP-Adressen innerhalb von
            Mitgliedstaaten der Europäischen Union oder in anderen
            Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum,
            weswegen keine Rückschlüsse auf Ihre Identität möglich sind. Nur in
            Ausnahmefällen wird die volle IP-Adresse an einen Server von Google
            in den USA übertragen und dort gekürzt. Google beachtet die
            Datenschutzbestimmungen des „US-Safe-Harbor“-Abkommens und ist beim
            „Safe Harbor“-Programm des US-Handelsministeriums registriert und
            nutzt die gesammelten Informationen, um die Nutzung unserer Websites
            auszuwerten, Berichte für uns diesbezüglich zu verfassen und andere
            diesbezügliche Dienstleistungen an uns zu erbringen. Mehr erfahren
            Sie{" "}
            <a href="http://www.google.com/intl/de/analytics/privacyoverview.html">
              hier
            </a>
            .
          </p>
          <p>
            Quelle:{" "}
            <a href="https://www.anwalt.de/vorlage/muster-datenschutzerklaerung.php">
              Muster-Datenschutzerklärung von anwalt.de
            </a>
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
};
