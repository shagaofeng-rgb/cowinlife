import Image from "next/image";
import { storeConfig } from "@/config/store.config";

export function WhatsAppFloat() {
  return (
    <a className="whatsapp-float" href={storeConfig.whatsappChatUrl} target="_blank" rel="noreferrer" aria-label="Chat with Cowinlife on WhatsApp">
      <Image src="/images/whatsapp.svg" alt="" width={30} height={30} />
      <span>WhatsApp</span>
    </a>
  );
}
