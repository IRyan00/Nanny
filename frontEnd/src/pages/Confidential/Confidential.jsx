import { Container, Row, Col } from "react-bootstrap";

const PolitiqueConfidentialite = () => {
  return (
    <Container className="text-center py-5">
      <h1 className="mb-4">Politique de confidentialité</h1>

      <Row className="mb-4">
        <Col>
          <h4>1. Introduction</h4>
          <p>
            La présente politique de confidentialité a pour but d'informer les
            utilisateurs du site https://nanny-jet.vercel.app sur la manière
            dont Muriel MARIAU, assistante maternelle agréée, collecte, utilise,
            protège et conserve leurs données personnelles.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h4>2. Responsable du traitement</h4>
          <p>
            Le responsable du traitement est : Ryan EYMAS | Adresse : &lt;&lt;
            Adresse postale complète &gt;&gt; | Email : eymas.ryan@gmail.com
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h4>3. Données collectées</h4>
          <p>
            Les données suivantes peuvent être collectées via le formulaire de
            contact :
          </p>
          <ul className="list-unstyled">
            <li>Nom et prénom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone</li>
            <li>Contenu du message</li>
          </ul>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h4>4. Finalités de la collecte</h4>
          <p>
            Les données sont collectées uniquement pour les finalités suivantes
            :
          </p>
          <ul className="list-unstyled">
            <li>Répondre aux demandes de contact</li>
            <li>Fournir des informations sur l'accueil proposé</li>
          </ul>
          <p>
            Ces données ne sont ni revendues, ni transmises à des tiers sans
            consentement explicite.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h4>5. Durée de conservation</h4>
          <p>
            Les données sont conservées pendant une durée maximale de 12 mois à
            compter du dernier contact, sauf si la législation impose une durée
            plus longue.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h4>6. Droits des utilisateurs</h4>
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul className="list-unstyled">
            <li>Droit d'accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l'effacement</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit d’opposition</li>
          </ul>
          <p>
            Pour exercer vos droits, adressez votre demande à :{" "}
            eymas.ryan@gmail.com
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h4>7. Sécurité des données</h4>
          <p>
            Muriel MARIAU met en œuvre toutes les mesures techniques et
            organisationnelles raisonnables pour protéger les données collectées
            contre la perte, le vol, l’accès ou la divulgation non autorisés.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h4>8. Cookies</h4>
          <p>
            Le site peut utiliser des cookies strictement nécessaires au bon
            fonctionnement (langue, session...). Aucune donnée personnelle n'est
            stockée sans consentement explicite.
          </p>
          <p>
            Vous pouvez gérer vos préférences de cookies via le bouton prévu à
            cet effet ainsi que les paramètres de votre navigateur.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default PolitiqueConfidentialite;
