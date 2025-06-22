import { Container, Row, Col } from "react-bootstrap";

const CGU = () => {
  return (
    <Container className="text-center py-5">
      <h1 className="mb-4">Conditions Générales d’Utilisation (CGU)</h1>

      <Row className="mb-4">
        <Col>
          <h4>1. Objet</h4>
          <p>
            Les présentes Conditions Générales d’Utilisation ont pour objet de
            définir les modalités d’accès et d’utilisation du site internet
            "Muriel - Assistante maternelle", accessible à l’adresse suivante :
            https://nanny-jet.vercel.app/.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h4>2. Acceptation des conditions</h4>
          <p>
            L’utilisation de ce site implique l’acceptation pleine et entière
            des présentes CGU. En cas de désaccord avec celles-ci, l’utilisateur
            est invité à ne pas utiliser le site.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h4>3. Accès au site</h4>
          <p>
            Le site est accessible gratuitement à tout utilisateur disposant
            d’un accès à internet. Tous les frais liés à l’accès au service
            (matériel, logiciels, connexion internet) sont à la charge de
            l’utilisateur.
          </p>
          <p>
            Ryan EYMAS s’efforce de garantir un accès au site 24h/24, 7j/7, mais
            ne saurait être tenue responsable en cas d’interruption ou de
            dysfonctionnement temporaire.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h4>4. Services proposés</h4>
          <p>
            Le site a pour objet de présenter l’activité d’assistante maternelle
            agréée de Muriel MARIAU, ses services, son cadre d’accueil et ses
            disponibilités. Les informations sont fournies à titre indicatif et
            peuvent être mises à jour à tout moment.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h4>5. Responsabilité</h4>
          <p>
            Muriel MARIAU met tout en œuvre pour fournir des informations
            fiables, à jour et exactes. Toutefois, elle ne saurait être tenue
            responsable des erreurs, omissions, ou d’une absence de mise à jour
            des informations disponibles.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h4>6. Propriété intellectuelle</h4>
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
          <h4>7. Données personnelles</h4>
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
          <h4>8. Liens externes</h4>
          <p>
            Le site peut contenir des liens vers d’autres sites. "Muriel MARIAU"
            ne peut être tenue responsable du contenu de ces sites tiers.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h4>9. Modification des CGU</h4>
          <p>
            Les présentes conditions peuvent être modifiées à tout moment. Les
            utilisateurs sont invités à les consulter régulièrement.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default CGU;
