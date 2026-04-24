import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200/80 bg-[var(--surface-1)] pt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.3fr]">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-sm font-extrabold text-indigo-700">
              S
            </div>

            <div>
              <p className="text-lg font-bold tracking-tight text-slate-900">
                STECH
              </p>
              <p className="-mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Computer Education
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Useful Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li className="transition-colors hover:text-slate-900">Study Materials</li>
              <li className="transition-colors hover:text-slate-900">Certificates</li>
              <li className="transition-colors hover:text-slate-900">Our Affiliations</li>
              <li className="transition-colors hover:text-slate-900">Payment Details</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Our Company
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li className="transition-colors hover:text-slate-900">Contact Us</li>
              <li className="transition-colors hover:text-slate-900">Blog</li>
              <li className="transition-colors hover:text-slate-900">Jobs</li>
              <li className="transition-colors hover:text-slate-900">Franchise Details</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Get Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2 leading-6">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                Phone: 7008352041
              </li>
              <li className="flex items-start gap-2 break-all leading-6">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <a
                  href="mailto:Stechrourkela@gmail.com"
                >
                  Stechrourkela@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 leading-6">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                Location: OAV15, Civiltownship Dis: Sundargarh, Odisha
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-300/80 py-5 text-xs text-slate-600 sm:flex sm:items-center sm:justify-between">
          <p>Copyright © 2026 DITRP INDIA. All Rights Reserved</p>
          <div className="mt-3 flex flex-wrap gap-3 sm:mt-0 sm:gap-5">
            <p>Privacy policy</p>
            <p>Term and conditions</p>
            <p>Refund policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;