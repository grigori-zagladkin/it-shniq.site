import {
  referal_cloud,
  promocode,
  referal_domain_registration,
  referal_hosting,
  referal_main_page,
} from "@/common/constants";
import Anchor from "./Anchor";

const Page = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="lg:max-w-[600px] flex flex-col items-center justify-center gap-4">
        <div className="font-semibold text-4xl">
          Промокод{" "}
          <Anchor
            label="REG.RU"
            link={referal_main_page || ""}
            className="text-4xl"
          />
        </div>
        <p className="font-light text-2xl text-center">
          Для тех, кто хочет получить 5% скидку при заказе{" "}
          <Anchor label="хостинга" link={referal_hosting || ""} />,{" "}
          <Anchor label="домена" link={referal_domain_registration || ""} />,{" "}
          <Anchor label="облачных услуг" link={referal_cloud || ""} /> может
          воспользоваться промокодом
        </p>
        <div>
          <Anchor
            copyOnClick={true}
            link={referal_main_page || ""}
            label={promocode || ""}
            className="text-4xl"
          />
          <div className="text-xl font-light text-slate-500">
            Скопировать промокод и перейти на reg.ru
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
