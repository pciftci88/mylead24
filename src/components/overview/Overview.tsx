import React, { useState } from 'react';
import { Wrapper, Product, ProductHeader, List, ListElement, ListLink, SubList, SubListElement, Icon, ALink } from './styles';
import { faEuroSign, faHome, faWifi, faHandHoldingUsd, faMedkit, faProcedures, faBolt, faLeaf, faBurn, faGavel, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

function Overview() {
    const [isOpenListKfz, setIsOpenListKfz] = useState(false);
    const [isOpenListMedical, setIsOpenListMedical] = useState(false);
    const [isOpenListPrevention, setIsOpenListPrevention] = useState(false);
    const [isOpenListProperty, setIsOpenListProperty] = useState(false);

    const toggleListKfz = () => setIsOpenListKfz(!isOpenListKfz);
    const toggleListMedical = () => setIsOpenListMedical(!isOpenListMedical);
    const toggleListPrevention = () => setIsOpenListPrevention(!isOpenListPrevention);
    const toggleListProperty = () => setIsOpenListProperty(!isOpenListProperty);

    return (
        <Wrapper>
            <Product>
                <ProductHeader>Finanzen</ProductHeader>
                <List>
                    <ListElement>
                        <Icon icon={faEuroSign} size='1x' color='white' />
                        <ListLink to="/finanzen/kredite">Kredite</ListLink>
                    </ListElement>
                    <ListElement>
                        <Icon icon={faHandHoldingUsd} size='1x' color='white' />
                        <ListLink to="/finanzen/baufinanzierung">Baufianzierung</ListLink>
                    </ListElement>
                    <ListElement>
                        <Icon icon={faHome} size='1x' color='white' />
                        <ListLink to="/finanzen/immobilien">Immoibilienverkauf</ListLink>
                    </ListElement>
                </List>
            </Product>
            <Product>
                <ProductHeader>Versicherungen</ProductHeader>
                <List>
                    <ListElement onClick={toggleListKfz}>
                        <Icon icon={faHome} size='1x' color='white' />
                        Kfz-Versicherung
                        <SubList isOpen={isOpenListKfz}>
                            <SubListElement>
                                <ALink href='https://a.partner-versicherung.de/click.php?partner_id=109564&ad_id=15&deep=kfz-versicherung'>
                                    Kfz-Versicherung
                                    <Icon icon={faArrowCircleRight} size='1x' color='white' />
                                </ALink>
                            </SubListElement>
                            <SubListElement>
                                <ALink href='https://a.partner-versicherung.de/click.php?partner_id=109564&ad_id=15&deep=motorradversicherung'>
                                    Motorradversicherung
                                    <Icon icon={faArrowCircleRight} size='1x' color='white' />
                                </ALink>
                            </SubListElement>
                        </SubList>
                    </ListElement>
                    <ListElement onClick={toggleListMedical}>
                        <Icon icon={faMedkit} size='1x' color='white' />
                        Krankenvericherungen
                        <SubList isOpen={isOpenListMedical}>
                            <SubListElement>
                                <ALink href='https://a.partner-versicherung.de/click.php?partner_id=109564&ad_id=15&deep=private-krankenversicherung'>
                                    Zum Verlgeich
                                    <Icon icon={faArrowCircleRight} size='1x' color='white' />
                                </ALink>
                            </SubListElement>
                        </SubList>
                    </ListElement>
                    <ListElement onClick={toggleListPrevention}>
                        <Icon icon={faProcedures} size='1x' color='white' />
                        Vorsorgeversicherung
                        <SubList isOpen={isOpenListPrevention}>
                            <SubListElement>
                                <ALink href='https://a.partner-versicherung.de/click.php?partner_id=109564&ad_id=15&deep=rentenversicherung'>
                                    Rente
                                    <Icon icon={faArrowCircleRight} size='1x' color='white' />
                                </ALink>
                            </SubListElement>
                            <SubListElement>
                                <ALink href='https://a.partner-versicherung.de/click.php?partner_id=109564&ad_id=15&deep=berufsunfaehigkeitsversicherung'>
                                    Berufsunfähigkeit
                                    <Icon icon={faArrowCircleRight} size='1x' color='white' />
                                </ALink>
                            </SubListElement>
                            <SubListElement>
                                <ALink href='https://a.partner-versicherung.de/click.php?partner_id=109564&ad_id=15&deep=lebensversicherung'>
                                    Leben
                                    <Icon icon={faArrowCircleRight} size='1x' color='white' />
                                </ALink>
                            </SubListElement>
                            <SubListElement>
                                <ALink href='https://a.partner-versicherung.de/click.php?partner_id=109564&ad_id=15&deep=unfallversicherung'>
                                    Unfall
                                    <Icon icon={faArrowCircleRight} size='1x' color='white' />
                                </ALink>
                            </SubListElement>
                            <SubListElement>
                                <ALink href='https://a.partner-versicherung.de/click.php?partner_id=109564&ad_id=15&deep=riester-rente'>
                                    Riester-Rente
                                    <Icon icon={faArrowCircleRight} size='1x' color='white' />
                                </ALink>
                            </SubListElement>
                            <SubListElement>
                                <ALink href='https://a.partner-versicherung.de/click.php?partner_id=109564&ad_id=15&deep=risikolebensversicherung'>
                                    Risikoleben
                                    <Icon icon={faArrowCircleRight} size='1x' color='white' />
                                </ALink>
                            </SubListElement>
                            <SubListElement>
                                <ALink href='https://a.partner-versicherung.de/click.php?partner_id=109564&ad_id=15&deep=ruerup-rente'>
                                    Rürup-Rente
                                    <Icon icon={faArrowCircleRight} size='1x' color='white' />
                                </ALink>
                            </SubListElement>
                            <SubListElement>
                                <ALink href='https://a.partner-versicherung.de/click.php?partner_id=109564&ad_id=15&deep=pflegezusatzversicherung'>
                                    Pflegezusatz
                                    <Icon icon={faArrowCircleRight} size='1x' color='white' />
                                </ALink>
                            </SubListElement>
                        </SubList>
                    </ListElement>
                    <ListElement onClick={toggleListProperty}>
                        <Icon icon={faGavel} size='1x' color='white' />
                        Sachversicherungen
                        <SubList isOpen={isOpenListProperty}>
                            <SubListElement>
                                <ALink href='https://a.partner-versicherung.de/click.php?partner_id=109564&ad_id=15&deep=haftpflichtversicherung'>
                                    Haftpflicht
                                    <Icon icon={faArrowCircleRight} size='1x' color='white' />
                                </ALink>
                            </SubListElement>
                            <SubListElement>
                                <ALink href='https://a.partner-versicherung.de/click.php?partner_id=109564&ad_id=15&deep=hausratversicherung'>
                                    Hausrat
                                    <Icon icon={faArrowCircleRight} size='1x' color='white' />
                                </ALink>
                            </SubListElement>
                            <SubListElement>
                                <ALink href='https://a.partner-versicherung.de/click.php?partner_id=109564&ad_id=15&deep=hundeversicherung'>
                                    Tierhalter
                                    <Icon icon={faArrowCircleRight} size='1x' color='white' />
                                </ALink>
                            </SubListElement>
                            <SubListElement>
                                <ALink href='https://a.partner-versicherung.de/click.php?partner_id=109564&ad_id=15&deep=wohngebaeudeversicherung'>
                                    Wohngebäude
                                    <Icon icon={faArrowCircleRight} size='1x' color='white' />
                                </ALink>
                            </SubListElement>
                            <SubListElement>
                                <ALink href='https://a.partner-versicherung.de/click.php?partner_id=109564&ad_id=15&deep=grundbesitzerhaftpflicht'>
                                    Haus- und Grundbesitz
                                    <Icon icon={faArrowCircleRight} size='1x' color='white' />
                                </ALink>
                            </SubListElement>
                            <SubListElement>
                                <ALink href='https://a.partner-versicherung.de/click.php?partner_id=109564&ad_id=15&deep=rechtsschutzversicherung'>
                                    Rechtsschutz
                                    <Icon icon={faArrowCircleRight} size='1x' color='white' />
                                </ALink>
                            </SubListElement>
                            <SubListElement>
                                <ALink href='https://a.partner-versicherung.de/click.php?partner_id=109564&ad_id=15&deep=firmenversicherung'>
                                    Firmen
                                    <Icon icon={faArrowCircleRight} size='1x' color='white' />
                                </ALink>
                            </SubListElement>
                        </SubList>
                    </ListElement>
                </List>
            </Product>
            <Product>
                <ProductHeader>Haushalt</ProductHeader>
                <List>
                    <ListElement>
                        <Icon icon={faBolt} size='1x' color='white' />
                        <ListLink to="/strom-gas/strom">Strom</ListLink>
                    </ListElement>
                    <ListElement>
                        <Icon icon={faLeaf} size='1x' color='white' />
                        <ListLink to="/strom-gas/oekostrom">Ökostrom</ListLink>
                    </ListElement>
                    <ListElement>
                        <Icon icon={faBurn} size='1x' color='white' />
                        <ListLink to="/strom-gas/gas">Gas</ListLink>
                    </ListElement>
                    <ListElement>
                        <Icon icon={faWifi} size='1x' color='white' />
                        <ListLink to="/dsl">DSL</ListLink>
                    </ListElement>
                </List>
            </Product>
        </Wrapper>
    )
}

export default Overview;