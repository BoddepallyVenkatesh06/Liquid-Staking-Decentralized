import { hardhat } from "wagmi/chains";
import { SwitchTheme } from "~~/components/SwitchTheme";
import { Faucet } from "~~/components/scaffold-eth";
import { getTargetNetwork } from "~~/utils/scaffold-eth";

/**
 * Site footer
 */
export const Footer = () => {
  return (
    <div className="min-h-0 p-5 mb-4 lg:mb-0">
      <div>
        <div className="fixed flex justify-between items-center w-full z-20 p-4 bottom-0 left-0 pointer-events-none">
          <div className="flex space-x-2 pointer-events-auto">{getTargetNetwork().id === hardhat.id && <Faucet />}</div>
          <SwitchTheme className="pointer-events-auto" />
        </div>
      </div>
      <div className="w-full">
        <ul className="menu menu-horizontal w-full">
          <div className="flex justify-center items-center gap-2 text-sm w-full">
            <div>
              Built using{" "}
              <a
                href="https://lido.fi/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2"
              >
                Liquid Staking
              </a>
              🫗 |{" "}
              <a
                href="https://github.com/BoddepallyVenkatesh06"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2"
              >
                Harsh Agrawal
              </a>
              🔗
              <a
                href="https://github.com/BoddepallyVenkatesh06"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2"
              >
                Venky Kumar
              </a>
              📝  Source Code
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};
