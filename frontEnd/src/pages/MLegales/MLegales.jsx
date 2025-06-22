import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MentionsLegales = () => {
  return (
    <Container className="text-center py-5">
      <h1 className="mb-4">Mentions légales</h1>

      <Row className="mb-4">
        <Col>
          <h4>1. Éditeur du site</h4>
          <p>
            <strong>Nom :</strong> MARIAU Muriel
          </p>
          <p>
            <strong>Adresse :</strong> &lt;&lt; Adresse postale complète
            &gt;&gt;
          </p>
          <p>
            <strong>Téléphone :</strong> &lt;&lt; Numéro de téléphone &gt;&gt;
          </p>
          <p>
            <strong>Email :</strong> &lt;&lt; Adresse e-mail &gt;&gt;
          </p>
          <p>
            <strong>Statut :</strong> Assistante maternelle agréée
          </p>
          <p>
            <strong>Numéro d’agrément :</strong> &lt;&lt; Numéro d’agrément
            &gt;&gt;
          </p>
          <p>
            <strong>SIRET :</strong> &lt;&lt; Numéro SIRET &gt;&gt;
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h4>2. Responsable de publication</h4>
          <p>
            <strong>Nom :</strong> EYMAS Ryan
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h4>3. Hébergeur du site</h4>
          <p>
            <strong>Nom :</strong> Vercel
          </p>
          <p>
            <strong>Adresse :</strong> San Francisco, États-Unis
          </p>
          <p>
            <strong>Téléphone :</strong> &lt;&lt; Téléphone de l’hébergeur
            &gt;&gt;
          </p>
          <p>
            <strong>Site web :</strong> https://vercel.com
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h4>4. Propriété intellectuelle</h4>
          <p>
            Tous les contenus présents sur ce site (textes, images, logo, etc.)
            sont la propriété exclusive de Muriel MARIAU, sauf mention contraire
            (images du carousel). Toute reproduction ou utilisation est
            interdite sans autorisation préalable.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h4>5. Données personnelles</h4>
          <p>
            Ce site collecte uniquement les données transmises via le formulaire
            de contact (nom, prénom, email, numéro) directement à la boîte mail
            suivante : muriel.mariau@gmail.com. Ces données sont utilisées pour
            répondre aux demandes des utilisateurs.
          </p>
          <p>
            Conformément au RGPD, vous pouvez demander l'accès, la rectification
            ou la suppression de vos données en écrivant à :
            eymas.ryan@gmail.com.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h4>6. Cookies</h4>
          <p>
            Les cookie sur ce site sont géré via tarteaucitron. Ce site utilise
            uniquement des cookies essentiels à son bon fonctionnement. Aucun
            cookie publicitaire ou de traçage n'est installé sans votre
            consentement. De plus afin d'éviter le spam bot ce site est protégé
            via Google reCaptcha qui est géré dans les cookies
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h4>7. Conditions d’utilisation</h4>
          <p>
            En utilisant ce site, vous acceptez les présentes mentions légales.
            Bien que régulièrement mises à jour, les informations peuvent
            contenir des inexactitudes involontaires.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default MentionsLegales;
