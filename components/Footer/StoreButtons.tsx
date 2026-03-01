import Image from "next/image";

const StoreButtons = () => {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-gray-400">
        Save $3 with App New User Only
      </p>

      <div className="flex gap-3 items-center">
        <Image
          src="/qr.png"
          alt="QR Code"
          width={80}
          height={80}
        />

        <div className="flex flex-col gap-2">
          <Image
            src="/google-play.png"
            alt="Google Play"
            width={120}
            height={40}
          />
          <Image
            src="/app-store.png"
            alt="App Store"
            width={120}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default StoreButtons;
