import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-[#f5f5f5] pt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr_1.3fr]">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-sm font-extrabold text-indigo-700">
              S
            </div>

            <div>
              <p className="text-lg font-extrabold tracking-tight text-slate-900">
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
              <li>Study Materials</li>
              <li>Certificates</li>
              <li>Our Affiliations</li>
              <li>Payment Details</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Our Company
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>Contact Us</li>
              <li>Blog</li>
              <li>Jobs</li>
              <li>Franchise Details</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Get Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                Phone: 7008352041
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                E-mail: Stechrourkela@gmail.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                Location: OAV15, Civiltownship Dis: Sundargarh, Odisha
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-300 py-5 text-xs text-slate-600 sm:flex sm:items-center sm:justify-between">
          <p>Copyright © 2036 DITRP INDIA. All Rights Reserved</p>
          <div className="mt-3 flex gap-5 sm:mt-0">
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
