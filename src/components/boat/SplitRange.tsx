import ImageWithDivSectionAndTabs from "@/components/ImageWithDivSectionAndTabs";

export default function SplitRange() {
  return (
    <div className="split-range">
      <ImageWithDivSectionAndTabs
        align="right"
        subtitle="WHY"
        title="STABI"
        tabs={[
          { title: "FOUNDED ON STABILITY", description: "The commitment is in the name." },
          {
            title: "BUILT TO LAST",
            description: "Legendary Stabi toughness.",
          },
          {
            title: "UNPARALLELED SAFETY",
            description: "Aluminium Life Ring Protection.",
          },
          {
            title: "BORN STAUNCH BY NECESSITY",
            description: "Formed by the rugged roaring forties.",
          },
        ]}
      />
    </div>
  );
}
