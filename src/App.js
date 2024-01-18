
import { Arrivals } from "./components/arrivals/Arrivals";

import { Brands } from "./components/brands/Brands";
import { Community } from "./components/community/Community";
import { Favourite } from "./components/favourite/Favourite";
import { Header } from "./components/header/Header";
import { Promo } from "./components/promo/Promo";
import { Voucher } from "./components/voucher/Voucher";


function App() {

  return (
		<>
      <Header/>
      <Promo/>
      <Brands/>
      <Arrivals/>
      <Favourite/>
      <Voucher/>
      <Community/>
      
		</>
  );
}

export default App;
