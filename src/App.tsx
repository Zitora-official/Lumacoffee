import Frame from "@/imports/Frame2/index";

export default function App() {
  return (
    <div className="min-h-screen bg-[#8b6914] flex items-start justify-center">
      <div
        className="relative w-full max-w-[390px] bg-[rgb(197,168,116)]"
        style={{ minHeight: "844px" }}
      >
        <Frame />
      </div>
    </div>
  );
}
