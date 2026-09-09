import { useState } from "react";
import { Link } from "react-router-dom";
import {
  UserRound,
  Package,
  Heart,
  MapPin,
  Settings,
  LogOut,
  ChevronRight,
  Pencil,
  Mail,
  Phone,
  CalendarDays,
  ShoppingBag,
  Truck,
  ShieldCheck,
} from "lucide-react";
import useLogout from "@/hooks/auth/useLogout";

const MyAccount = () => {
  const [activeSection, setActiveSection] = useState("profile");
const { logout } = useLogout();

  const menuItems = [
    {
      id: "profile",
      label: "Personal Information",
      icon: UserRound,
    },
    {
      id: "orders",
      label: "My Orders",
      icon: Package,
      href: "/my-orders",
    },
    {
      id: "wishlist",
      label: "Wishlist",
      icon: Heart,
      href: "/wishlist",
    },
    {
      id: "addresses",
      label: "Saved Addresses",
      icon: MapPin,
    },
    {
      id: "settings",
      label: "Account Settings",
      icon: Settings,
    },
  ];

  const handleMenuClick = (item) => {
    if (!item.href) {
      setActiveSection(item.id);
    }
  };

  return (
    <main className="min-h-screen bg-[#f5ebda]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden border-b border-[#603917]/10 bg-[#f4eee3]">

        <div className="absolute -right-24 -top-28 h-72 w-72 rounded-full bg-[#8b183d]/5 blur-3xl" />

        <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#3e5a2c]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-4 sm:px-8 md:py-6 lg:px-8">

          <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8b183d]">
            Your Account
          </p>

          <h1 className="mt-2 font-cormorant text-2xl font-bold leading-none text-[#572340] sm:text-4xl">
            My Account
          </h1>

          <p className="mt-2 max-w-xl font-manrope text-sm leading-7 text-[#603917]/65 sm:text-base">
            Manage your profile, orders, addresses and preferences — all in
            one place.
          </p>

        </div>
      </section>

      {/* =====================================================
          ACCOUNT CONTENT
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-4 sm:px-8 md:py-6 lg:px-6">

        <div className="grid gap-7 lg:grid-cols-[270px_1fr]">

          {/* =================================================
              SIDEBAR
          ================================================= */}
          <aside className="h-fit overflow-hidden rounded-3xl border border-[#603917]/10 bg-white shadow-[0_8px_35px_rgba(96,57,23,0.04)]">

            {/* User mini profile */}
            <div className="border-b border-[#603917]/10 bg-[#f9f5ed] p-5">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pink-600 text-white">
                  <span className="font-cormorant text-xl font-bold">
                    C
                  </span>
                </div>

                <div className="min-w-0">
                  <p className="truncate font-manrope text-sm font-bold text-[#572340]">
                    Customer Name
                  </p>

                  <p className="truncate font-manrope text-[11px] text-[#603917]/50">
                    customer@example.com
                  </p>
                </div>

              </div>

            </div>

            {/* Navigation */}
            <nav className="p-3">

              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                const content = (
                  <div
                    className={`flex w-full items-center justify-between rounded-2xl px-4 py-3.5 transition-all ${
                      isActive
                        ? "bg-pink-600 text-white"
                        : "text-[#603917]/70 hover:bg-pink-600 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">

                      <Icon className="h-[17px] w-[17px]" />

                      <span className="font-manrope text-xs font-semibold">
                        {item.label}
                      </span>

                    </div>

                    {!isActive && (
                      <ChevronRight className="h-4 w-4 opacity-40" />
                    )}
                  </div>
                );

                if (item.href) {
                  return (
                    <Link
                      key={item.id}
                      to={item.href}
                      className="mb-1 block"
                    >
                      {content}
                    </Link>
                  );
                }

                return (
                  <button
                    key={item.id}
                    onClick={() => handleMenuClick(item)}
                    className="mb-1 block w-full text-left"
                  >
                    {content}
                  </button>
                );
              })}

              {/* Logout */}
              <button
                type="button"
                className="mt-2 flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 text-left text-[#8b183d] transition-colors hover:bg-[#8b183d]/5"
                onClick={logout}
              >
                <LogOut className="h-[17px] w-[17px]"/>
 
                <span className="font-manrope text-xs font-semibold">
                  Logout
                </span>
              </button>

            </nav>
          </aside>

          {/* =================================================
              MAIN CONTENT
          ================================================= */}
          <div className="min-w-0">

            {/* ===============================================
                PROFILE HEADER
            =============================================== */}
            <div className="rounded-3xl border border-[#603917]/10 bg-white p-5 shadow-[0_8px_35px_rgba(96,57,23,0.04)] sm:p-7">

              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-center gap-4 sm:gap-5">

                  <div className="relative">

                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-pink-600 text-white sm:h-24 sm:w-24">
                      <span className="font-cormorant text-4xl font-bold">
                        C
                      </span>
                    </div>

                    <button
                      type="button"
                      className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-pink-600 text-white shadow-sm"
                      aria-label="Edit profile photo"
                    >
                      <Pencil className="h-3.5 w-3.5" />
                    </button>

                  </div>

                  <div>
                    <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8b183d]">
                      Welcome back
                    </p>

                    <h2 className="mt-1 font-cormorant text-3xl font-semibold text-[#572340] sm:text-4xl">
                      Customer Name
                    </h2>

                    <p className="mt-1 font-manrope text-xs text-[#603917]/50">
                      Member since September 2026
                    </p>
                  </div>

                </div>

                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-pink-600 px-5 py-3 font-manrope text-xs font-semibold text-white shadow-[2px_3px_0px_#000] transition-all hover:bg-[#60b396] hover:shadow-[3px_4px_0px_#000] sm:self-auto"
                >
                  <Pencil className="h-3.5 w-3.5" />
                  Edit Profile
                </button>

              </div>

            </div>

            {/* ===============================================
                QUICK STATS
            =============================================== */}
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">

              <StatCard
                icon={ShoppingBag}
                label="Total Orders"
                value="3"
              />

              <StatCard
                icon={Truck}
                label="In Transit"
                value="1"
              />

              <StatCard
                icon={Heart}
                label="Wishlist"
                value="8"
              />

              <StatCard
                icon={MapPin}
                label="Addresses"
                value="2"
              />

            </div>

            {/* ===============================================
                PERSONAL INFORMATION
            =============================================== */}
            {activeSection === "profile" && (
              <div className="mt-6 rounded-3xl border border-[#603917]/10 bg-white p-5 shadow-[0_8px_35px_rgba(96,57,23,0.04)] sm:p-7">

                <SectionHeader
                  eyebrow="Profile"
                  title="Personal Information"
                  icon={UserRound}
                />

                <div className="mt-7 grid gap-5 sm:grid-cols-2">

                  <InfoField
                    icon={UserRound}
                    label="Full Name"
                    value="Customer Name"
                  />

                  <InfoField
                    icon={Mail}
                    label="Email Address"
                    value="customer@example.com"
                  />

                  <InfoField
                    icon={Phone}
                    label="Phone Number"
                    value="+91 98XXXXXX10"
                  />

                  <InfoField
                    icon={CalendarDays}
                    label="Date of Birth"
                    value="Not added"
                  />

                </div>

              </div>
            )}

            {/* ===============================================
                SAVED ADDRESSES
            =============================================== */}
            {activeSection === "addresses" && (
              <div className="mt-6 rounded-3xl border border-[#603917]/10 bg-white p-5 shadow-[0_8px_35px_rgba(96,57,23,0.04)] sm:p-7">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                  <SectionHeader
                    eyebrow="Delivery"
                    title="Saved Addresses"
                    icon={MapPin}
                  />

                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full bg-pink-600 px-5 py-3 font-manrope text-xs font-semibold text-white shadow-[2px_3px_0px_#000] transition-all hover:bg-[#60b396] hover:shadow-[3px_4px_0px_#000]"
                  >
                    + Add New Address
                  </button>

                </div>

                <div className="mt-7 grid gap-4 md:grid-cols-2">

                  <AddressCard
                    title="Home"
                    name="Customer Name"
                    address="123, Your Street, Near Main Market"
                    city="Surat, Gujarat - 395001"
                    phone="+91 98XXXXXX10"
                    defaultAddress
                  />

                  <AddressCard
                    title="Office"
                    name="Customer Name"
                    address="45, Business Avenue"
                    city="Surat, Gujarat - 395007"
                    phone="+91 98XXXXXX10"
                  />

                </div>

              </div>
            )}

            {/* ===============================================
                ACCOUNT SETTINGS
            =============================================== */}
            {activeSection === "settings" && (
              <div className="mt-6 rounded-3xl border border-[#603917]/10 bg-white p-5 shadow-[0_8px_35px_rgba(96,57,23,0.04)] sm:p-7">

                <SectionHeader
                  eyebrow="Preferences"
                  title="Account Settings"
                  icon={Settings}
                />

                <div className="mt-7 space-y-3">

                  <SettingRow
                    icon={Mail}
                    title="Email Notifications"
                    description="Receive updates about your orders and offers."
                  />

                  <SettingRow
                    icon={Truck}
                    title="Order Updates"
                    description="Get notified when your order status changes."
                  />

                  <SettingRow
                    icon={ShieldCheck}
                    title="Privacy & Security"
                    description="Manage your account security and privacy."
                  />

                </div>

              </div>
            )}

            {/* ===============================================
                ACCOUNT FOOTER
            =============================================== */}
            <div className="mt-6 rounded-3xl bg-[#572340] p-6  sm:p-7">

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                    Need assistance?
                  </p>

                  <h3 className="mt-1 font-cormorant text-3xl font-semibold text-white">
                    We're here to help.
                  </h3>

                  <p className="mt-1 font-manrope text-xs leading-6 text-white/60">
                    Have questions about your account or order?
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex shrink-0 items-center justify-center rounded-full bg-pink-600 px-6 py-3 font-manrope text-xs font-semibold text-white shadow-[2px_3px_0px_#000] transition-all hover:bg-[#60b396] hover:shadow-[3px_4px_0px_#000]"
                >
                  Contact Us
                </Link>

              </div>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

/* ============================================================
   STAT CARD
============================================================ */

const StatCard = ({ icon: Icon, label, value }) => {
  return (
    <div className="rounded-2xl border border-[#603917]/10 bg-white p-4 sm:p-5">

      <div className="flex items-center justify-between gap-2">

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#8b183d]/10">
          <Icon className="h-4 w-4 text-[#8b183d]" />
        </div>

        <span className="font-manrope text-xl font-bold text-[#572340]">
          {value}
        </span>

      </div>

      <p className="mt-3 font-manrope text-[10px] font-semibold uppercase tracking-wider text-[#603917]/45">
        {label}
      </p>

    </div>
  );
};

/* ============================================================
   SECTION HEADER
============================================================ */

const SectionHeader = ({ eyebrow, title, icon: Icon }) => {
  return (
    <div className="flex items-center gap-3">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#8b183d]/10">
        <Icon className="h-4 w-4 text-[#8b183d]" />
      </div>

      <div>
        <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.18em] text-[#603917]/45">
          {eyebrow}
        </p>

        <h2 className="font-cormorant text-3xl font-semibold leading-none text-[#572340]">
          {title}
        </h2>
      </div>

    </div>
  );
};

/* ============================================================
   INFO FIELD
============================================================ */

const InfoField = ({ icon: Icon, label, value }) => {
  return (
    <div className="rounded-2xl border border-[#603917]/10 bg-[#fbf8f2] p-4">

      <div className="flex items-center gap-2">

        <Icon className="h-4 w-4 text-[#8b183d]" />

        <span className="font-manrope text-[10px] font-semibold uppercase tracking-wider text-[#603917]/45">
          {label}
        </span>

      </div>

      <p className="mt-2 font-manrope text-sm font-semibold text-[#572340]">
        {value}
      </p>

    </div>
  );
};

/* ============================================================
   ADDRESS CARD
============================================================ */

const AddressCard = ({
  title,
  name,
  address,
  city,
  phone,
  defaultAddress,
}) => {
  return (
    <div className="relative rounded-2xl border border-[#603917]/10 bg-[#fbf8f2] p-5">

      {defaultAddress && (
        <span className="absolute right-4 top-4 rounded-full bg-[#3e5a2c]/10 px-3 py-1 font-manrope text-[9px] font-bold uppercase tracking-wider text-[#3e5a2c]">
          Default
        </span>
      )}

      <div className="flex items-center gap-2">

        <MapPin className="h-4 w-4 text-[#8b183d]" />

        <h3 className="font-manrope text-xs font-bold uppercase tracking-wider text-[#572340]">
          {title}
        </h3>

      </div>

      <div className="mt-4">

        <p className="font-manrope text-sm font-bold text-[#572340]">
          {name}
        </p>

        <p className="mt-2 font-manrope text-xs leading-6 text-[#603917]/60">
          {address}
          <br />
          {city}
        </p>

        <p className="mt-2 font-manrope text-xs text-[#603917]/50">
          {phone}
        </p>

      </div>

      <div className="mt-4 flex gap-2">

        <button
          type="button"
          className="rounded-full border border-[#603917]/15 bg-white px-4 py-2 font-manrope text-[10px] font-semibold text-[#603917] hover:border-[#8b183d]/30 hover:text-[#8b183d]"
        >
          Edit
        </button>

        <button
          type="button"
          className="rounded-full border border-[#603917]/15 bg-white px-4 py-2 font-manrope text-[10px] font-semibold text-[#603917]/60 hover:border-red-200 hover:text-red-600"
        >
          Remove
        </button>

      </div>
    </div>
  );
};

/* ============================================================
   SETTING ROW
============================================================ */

const SettingRow = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-[#603917]/10 p-4">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f9f5ed]">
        <Icon className="h-4 w-4 text-[#8b183d]" />
      </div>

      <div className="min-w-0 flex-1">

        <h3 className="font-manrope text-xs font-bold text-[#572340]">
          {title}
        </h3>

        <p className="mt-1 font-manrope text-[10px] leading-5 text-[#603917]/50">
          {description}
        </p>

      </div>

      <button
        type="button"
        className="h-5 w-9 shrink-0 rounded-full bg-[#3e5a2c] p-0.5"
        aria-label={`Toggle ${title}`}
      >
        <span className="ml-auto block h-4 w-4 rounded-full bg-white shadow-sm" />
      </button>

    </div>
  );
};

export default MyAccount;