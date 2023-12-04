import CallToActionContainer from "@/components/CallToActionContainer";

export default function DiscoverExplor() {
  return (
    <div className="discover-explor">
      <div className="wrapper">
        {/* CALL TO ACTION */}
        <CallToActionContainer
          texts={{
            call1: {
              bttnText: "BOATS",
              subtitle: "DISCOVER",
              title: "ALL BOATS",
            },
            call2: {
              bttnText: "COMING SOON",
              subtitle: "EXPLORE",
              title: "ALL ACCESSORIES",
            },
          }}
        />
      </div>
    </div>
  );
}
