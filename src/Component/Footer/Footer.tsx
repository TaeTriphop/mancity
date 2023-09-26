import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer footer-center p-4 bg-[#6caddf] text-base-content">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-3 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://www.mancity.com/meta/media/hpnbkq5d/partner_logo_etihad.png?width=160&height=80"
              alt="SavvyCal"
              width={160}
              height={80}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://www.mancity.com/meta/media/j20jxszx/partner_logo_puma.png?width=160&height=80"
              alt="Statamic"
              width={160}
              height={80}
            />
          </div>
        </div>
      </footer>
    </>
  );
}
