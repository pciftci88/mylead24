import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import {
    Wrapper,
    Section,
    Title,
    Hint
} from './styles';

class Impressum extends Component {
    state = {}

    render() {
        return (
            <Wrapper>
                <Helmet>
                    <title>Impressum</title>
                    <meta name="description" content="Unser Impressum." />
                </Helmet>
                <Title>Impressum</Title>
                <Section>
                    <p><strong>MyLead24.de ist ein Angebot von:</strong></p>
                    <p>Philipp Ciftci</p>
                    <h2>Postanschrift:</h2>
                    <p>
                        Einhornallee 28,<br />
                        81377 München<br />
                        Deutschland
                    </p>
                    {/*<p>USt-ID-Nr: DE XXXXXX</p>*/}
                    <p>
                        Email: info@mylead24.com<br />
                        Geschäftsführer: Philipp Ciftci
                    </p>
                    <p>Verantwortlicher für eigene Inhalte gem. §55 RStV: Philipp Ciftci</p>
                    <cite>Quelle der lizenzfreien Bilder: pexels.com</cite>
                </Section>
                <Section>
                    <h2>Weitere Hinweise:</h2>
                    <p><strong>CHECK24.net Partnerprogramm</strong></p>
                    <p>Wir nehmen am CHECK24.net Partnerprogramm teil. Auf unseren Seiten werden iFrame-Buchungsmasken und andere Werbemittel eingebunden, an denen wir über Transaktionen, zum Beispiel durch Leads und Sales, eine Werbekostenerstattung erhalten können.</p>
                    <p>Weitere Informationen zur Datennutzung durch CHECK24.net erhalten Sie in der Datenschutzerklärung von <a href="https://www.check24.net" target="_blank" rel="noreferrer">CHECK24.net</a>.</p>
                    <p>und</p>
                    <p>Alle Vergleiche powered by TARIFCHECK24 GmbH</p>
                    <p>
                        Zollstr. 11b<br />
                        21465 Wentorf bei Hamburg<br />
                        Tel. 040 - 73098288<br />
                        Fax 040 - 73098289<br />
                        E-Mail: info@tarifcheck.de
                    </p>
                </Section>
                <Section>
                    <Hint><strong>Hinweis:</strong> Wir nehmen am Partnerprogramm von Finanzcheck, Tarifcheck & Check24 teil und erhalten bei einer erfolgreichen Vermittlung eine Provision. Sie haben dadurch keinen Nachteil und zahlen auch nicht mehr dafür.</Hint>
                </Section>
            </Wrapper>
        )
    }
}

export default Impressum;