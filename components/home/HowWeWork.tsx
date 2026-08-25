import { Icon } from "@/components/icons/Icon";
import { processSteps } from "@/data/process";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/motion/Reveal";
import { ProcessLine } from "@/components/home/ProcessLine";

export function HowWeWork() {
  return (
    <section className="relative overflow-hidden bg-surface py-32">
      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-accent opacity-[0.03] blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-white opacity-[0.02] blur-[150px]" />
      <Container className="relative z-10">
        <Reveal>
          <h2 className="font-display mb-20 text-center text-4xl font-semibold tracking-tight md:text-5xl">
            How a job usually goes
          </h2>
        </Reveal>
        <div className="relative grid grid-cols-1 gap-6 pt-4 pl-4 md:grid-cols-4">
          <ProcessLine />
          {processSteps.map((step, index) => (
            <Reveal
              key={step.number}
              delay={index * 0.08}
              className="group relative rounded-2xl bg-background/50 p-8 shadow-[0_18px_38px_rgba(0,0,0,0.16)] backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:bg-background"
            >
              <div
                className={`absolute -top-4 -left-4 flex h-10 w-10 items-center justify-center rounded-lg font-display font-semibold text-white shadow-lg transition-colors duration-500 group-hover:bg-accent ${
                  index === 0 ? "bg-accent" : "bg-border"
                }`}
              >
                {step.number}
              </div>
              <Icon icon={step.icon} className="mb-6 text-3xl text-muted" />
              <h3 className="font-display mb-2 text-lg font-medium">{step.title}</h3>
              <p className="text-sm font-light text-muted">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
