import NavigationBar from "../NavigationBar";
import ButtonItem from "../ButtonItem";
import contactsActivity, {
  contactActivity
} from "../../../data/contactsActivity";
import RecentActivityCell from "../../Components/RecentActivityCell";
import { ReactElement } from "react";
import "./styles.css";

// interface CenterBoxProps {
//   children: ReactElement;
// }

// interface Whatever {}

// const CenterBox = (props: CenterBoxProps) => {
//   return <div className="centerBox">{props.children}</div>;
// };

// const YellowBox = (props: { children: ReactElement }) => {
//   return <div className="yellowBox">{props.children}</div>;
// };

const ContactsList = (props) => {
  const contact = (a: contactActivity) => (
    <RecentActivityCell key={a.id} {...a} />
  );

  const contacts = contactsActivity.map(contact);

  return (
    <>
      <NavigationBar
        title="Contacts"
        rightButton={
          <img
            className="iconButton"
            alt="Compose Button"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAPklEQVRIiWNgGFHgWZ3S/2d1Sv9J0cNEK8eMWjBqwRCygBHGIDUDEQJSTfcYGRjo4AOSwGhRMWrBqAUjFQAA2j8OOIsGJi4AAAAASUVORK5CYII="
          />
        }
      />

      <ButtonItem
        description="Find Dog Frieds"
        icon={
          <img
            className="iconButton"
            alt="Compose Button"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAADjElEQVRYhe2Wz2tcVRTHP+dOEslkAg0Ym5nEyryUVghSNUJcaPFXwUUXCjXoUlMtShfSxkBpZ/qYutJZBEulVf+AhooLdSMoCGppoQgW2tKQzixMXn4IWjSTxiZzj4v3Xk1i572ZhOCm39V953zvOd/7fffMPLiH/xnS6IapfHaPiBlE9WmgJwj/CvKDRcd6CqXvNkXApOvsMJZPgd2RRNXvqwnz5oPujYl66pp6SJ6b3W0sF4Lms6getaqPmoVKyixUUtbYx0CPAbOIPJOwetFznafqqR3rQHDyC0CHoGMJk9z/gHtl/m7c30Z2tt9uXf5MVAeB36tGBuKcaIoTENjeIehYV6H8moDW4nZ+cP0vhVen870C+krC6ifAc5H1o5JT+eweAtsTJrl/bXMv76iXd1bFBLR5sWkImAOencw7z69bgIgZBED1o9D2yVx2l5d3Tk8f2d4Z8qaPbO/08s7pyVx2F/hOoHISwIgOrltAMGpUE3z97wYpAge02Y7fofnrA0EOAJuo+ntUIqcmbgq6Ae4jWQoDVeUdkHPAlhW8LSjfCubdMNBCW3j5eohAnIBgSiqplUFVbY3Zh9yebw/pGxCg4wBVzONhJCF8LMJe4OYK4k2EFxQ7GgaqLYn+YDlOBKIFiHwDgGVfGLIJ+x5wRpbMjjs0f30myPk8q/tW1ajVIio5dSy7U4xcA+bNQiXdVZytrMyHI5gplFbVmRne2maTbTNAmzU83OOWaroQ6UD3++XrwE9AezWZemNtPlMoydrmALY1NQSkgB+jmscKAFBMEUDQkStuX0ss/63+ZkQPA6jRYhw/VkCmMPGlwGWgp8Muvh7Hn976xxCwDfgl45a/2rAAAcXoCf9Jj8+5fala3Dm3L4VwPHg8EfW/UbcAgLRb/hz/LqSX7K3hWrxluzACdAEX04XSF/XUrksAgBoZAVRg2HOdbWvz3tHsQyCHAVUjh+o5fUMCut0b54GzQBuW0f8QjIwCSeBswK0LdQsAaDL2EP4v4MszrrM3jHtu74sILwF/Lpulmq/obmj8ozSXPSgiJ4GyWag8YlL3y7K9dRnICnowXSif2lQB6mKmrXMeGFA4Jb6LbwOX0tdKT8o5qpsqAMBznSfwvxPDV1jFmIGMO/Fzo7UaugMhMm7pkkAR/wACfLie5usWALBorAtcBa7+bWxhvXU2BC/X2+/levvjmfdQG/8AoF1AIKwMMeEAAAAASUVORK5CYII="
          />
        }
      />
      <ButtonItem
        description="Invite Friends"
        icon={
          <img
            className="iconButton"
            alt="Compose Button"
            src="data:image/png;base64,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"
          />
        }
      />
      {contacts}
    </>
  );
};
export default ContactsList;
