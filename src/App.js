import "./styles.css";
import NavigationBar from "./Components/NavigationBar";
import Chat from "./Components/Chat";
import TabBar from "./Components/TabBar";

export default function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Chat
        profileName="Maximus"
        preview="llllllllldog (Canis familiaris or Canis lupus familiaris)[4] is a domesticated form of wolf. The dog descended from an ancient, extinct wolf,[5][6] with the modern grey wolf being the dog's nearest living relative.[7] The dog was the first species to be domesticated[8][7] by hunter–gatherers over 15,000 years ago,[6] before the development of agriculture.[1] Their long association with humans has led dogs to be uniquel"
        profilePicUrl="https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=1600&h=900"
        time="3:15"
        notification="2"
      />
      <Chat
        profileName="Atena"
        preview="The domestic dog (Canis familiaris or Canis lupus famili)[4] is a domesticated form of wolf. The dog descended from an ancient, extinct wolf,[5][6] with the modern grey wolf being the dog's nearest living relative.[7] The dog was the first species to be domesticated[8][7] by hunter–gatherers over 15,000 years ago,[6] before the development of agriculture.[1] Their long association with humans has led dogs to be uniquel"
        profilePicUrl="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg"
        time="5:30"
        notification="1"
      />
      <Chat
        profileName="Rocket"
        preview="The domestic dog (Canis familiaris or Canis lupus familiaris)[4] is a domesticated form of wolf. The dog descended from an ancient, extinct wolf,[5][6] with the modern grey wolf being the dog's nearest living relative.[7] The dog was the first species to be domesticated[8][7] by hunter–gatherers over 15,000 years ago,[6] before the development of agriculture.[1] Their long association with humans has led dogs to be uniquel"
        profilePicUrl="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F03%2F09%2Fdog-dating-1.jpg"
        time="8:22"
        notification="4"
      />
      <Chat
        profileName="Chispas"
        preview="The domestic dog (Canis familiaris or Canis lupus familiaris)[4] is a domesticated form of wolf. The dog descended from an ancient, extinct wolf,[5][6] with the modern grey wolf being the dog's nearest living relative.[7] The dog was the first species to be domesticated[8][7] by hunter–gatherers over 15,000 years ago,[6] before the development of agriculture.[1] Their long association with humans has led dogs to be uniquel"
        profilePicUrl="https://www.dogstrust.org.uk/help-advice/_images/164742v800_puppy-1.jpg"
        time="9:02"
        notification="11"
      />
      <Chat
        profileName="Milu"
        preview="The domesdog (Canis familiaris or Canis lupus familiaris)[4] is a domesticated form of wolf. The dog descended from an ancient, extinct wolf,[5][6] with the modern grey wolf being the dog's nearest living relative.[7] The dog was the first species to be domesticated[8][7] by hunter–gatherers over 15,000 years ago,[6] before the development of agriculture.[1] Their long association with humans has led dogs to be uniquel"
        profilePicUrl="https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/puppy-410265.jpg?h=0c7c9985&itok=ZQixcJRY"
        time="11:58"
        notification="288"
      />
      <Chat
        profileName="Pitufo"
        preview="The domestic dog (Canis familiaris or Canis lupus familiaris)[4] is a domesticated form of wolf. The dog descended from an ancient, extinct wolf,[5][6] with the modern grey wolf being the dog's nearest living relative.[7] The dog was the first species to be domesticated[8][7] by hunter–gatherers over 15,000 years ago,[6] before the development of agriculture.[1] Their long association with humans has led dogs to be uniquel"
        profilePicUrl="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg&w=1440"
        time="11:15"
        notification="588"
      />
      <Chat
        profileName="Morita"
        preview="The domestic dog (Canis familiaris or Canis lupus familiaris)[4] is a domesticated form of wolf. The dog descended from an ancient, extinct wolf,[5][6] with the modern grey wolf being the dog's nearest living relative.[7] The dog was the first species to be domesticated[8][7] by hunter–gatherers over 15,000 years ago,[6] before the development of agriculture.[1] Their long association with humans has led dogs to be uniquel"
        profilePicUrl="https://thumbs-prod.si-cdn.com/ej9KRK9frB5AXD6W9LXKFnuRc-0=/fit-in/1600x0/https://public-media.si-cdn.com/filer/ad/7b/ad7b3860-ad5f-43dc-800e-af57830cd1d3/labrador.jpg"
        time="7:12"
        notification="5"
      />

      <TabBar />
    </div>
  );
}
