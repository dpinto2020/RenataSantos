// Para trocar uma foto: importe a nova imagem e coloque em `image`.
// Ex.: import botox from "@/assets/servicos/toxina-botulinica.jpg"; { ..., image: botox }
import toxinaBotulinica from "@/assets/servicos/toxina-botulinica.jpg";
import preenchimentoLabial from "@/assets/servicos/preenchimento-labial.jpg";
import harmonizacaoFacial from "@/assets/servicos/harmonizacao-facial.jpg";
import bioestimuladorColageno from "@/assets/servicos/bioestimulador-colageno.jpg";
import skinbooster from "@/assets/servicos/skinbooster.jpg";
import limpezaDePele from "@/assets/servicos/limpeza-de-pele.jpg";
import peelingQuimico from "@/assets/servicos/peeling-quimico.jpg";
import microagulhamento from "@/assets/servicos/microagulhamento.jpg";
import enzimasGorduraLocalizada from "@/assets/servicos/enzimas-gordura-localizada.jpg";
import drenagemLinfatica from "@/assets/servicos/drenagem-linfatica.jpg";
import tratamentoCelulite from "@/assets/servicos/tratamento-celulite.jpg";
import tratamentoEstrias from "@/assets/servicos/tratamento-estrias.jpg";

export type Service = {
  name: string;
  category: string;
  description: string;
  price: number;
  image?: string;
};

export const services: Service[] = [
  { name: "Toxina Botulínica", category: "Facial", description: "Suaviza linhas de expressão da testa, glabela e pés de galinha.", price: 800, image: toxinaBotulinica },
  { name: "Preenchimento Labial", category: "Facial", description: "Volume, contorno e hidratação com ácido hialurônico.", price: 1200, image: preenchimentoLabial },
  { name: "Harmonização Facial", category: "Facial", description: "Equilíbrio e proporção do rosto com técnicas combinadas.", price: 2500, image: harmonizacaoFacial },
  { name: "Bioestimulador de Colágeno", category: "Facial", description: "Estimula a produção natural de colágeno e firmeza da pele.", price: 1500, image: bioestimuladorColageno },
  { name: "Skinbooster", category: "Facial", description: "Hidratação profunda e viço para uma pele luminosa.", price: 900, image: skinbooster },
  { name: "Limpeza de Pele", category: "Facial", description: "Remoção de impurezas, cravos e renovação celular.", price: 180, image: limpezaDePele },
  { name: "Peeling Químico", category: "Facial", description: "Uniformiza o tom, trata manchas e textura da pele.", price: 350, image: peelingQuimico },
  { name: "Microagulhamento", category: "Facial", description: "Tratamento de cicatrizes de acne, poros e rejuvenescimento.", price: 400, image: microagulhamento },
  { name: "Enzimas para Gordura Localizada", category: "Corporal", description: "Redução de medidas em áreas específicas do corpo.", price: 300, image: enzimasGorduraLocalizada },
  { name: "Drenagem Linfática", category: "Corporal", description: "Reduz retenção de líquidos e inchaço.", price: 150, image: drenagemLinfatica },
  { name: "Tratamento de Celulite", category: "Corporal", description: "Melhora da textura e aparência da pele.", price: 250, image: tratamentoCelulite },
  { name: "Tratamento de Estrias", category: "Corporal", description: "Atenua estrias e estimula a regeneração da pele.", price: 280, image: tratamentoEstrias },
];

export const categories = Array.from(new Set(services.map((s) => s.category)));
