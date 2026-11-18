import { Hero } from "@/components/home/Hero";
import { MissionBand } from "@/components/home/MissionBand";
import { TopicsList } from "@/components/home/TopicsList";
import { InteractiveTools } from "@/components/home/InteractiveTools";
import { Pathways } from "@/components/home/Pathways";
import { TrustStrip } from "@/components/home/TrustStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <MissionBand />
      <TopicsList />
      <InteractiveTools />
      <Pathways />
      <TrustStrip />
    </>
  );
}
