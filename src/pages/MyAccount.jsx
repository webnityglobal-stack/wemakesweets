import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
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
  ShoppingBag,
  Truck,
  ShieldCheck,
  X,
  Loader2,
} from "lucide-react";
import useLogout from "@/hooks/auth/useLogout";
import useUserDashboard from "@/hooks/user/useUserDashboard";
import useUpdateProfile from "@/hooks/user/useUpdateProfile";
import { authStorage } from "@/utils/authStorage";

const MyAccount = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const { logout } = useLogout();
  const { user: dashboardUser, stats, loading, refetch } = useUserDashboard();
  const {
    updateProfile,
    loading: updating,
    error: updateError,
    setError: setUpdateError,
  } = useUpdateProfile();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const user = dashboardUser || authStorage.getUser();
  const userName = user?.name || "";
  const userInitial = (userName?.[0] || "U").toUpperCase();
  const userEmail = user?.email || "";
  const userPhone = user?.phone || "Not provided";
  const memberSince = user?.createdAt
    ? new Date(user.createdAt).getFullYear()
    : new Date().getFullYear();

  const handleOpenEditModal = () => {
    setEditFormData({
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone && user?.phone !== "Not provided" ? user?.phone : "",
    });
    setUpdateError("");
    setIsEditModalOpen(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
    if (updateError) setUpdateError("");
  };

  const handleUpdateProfileSubmit = async (e) => {
    e.preventDefault();
    if (!editFormData.name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!editFormData.email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    const res = await updateProfile(editFormData);
    if (res.success) {
      toast.success(res.message || "Profile updated successfully!");
      setIsEditModalOpen(false);
      await refetch();
    } else {
      toast.error(res.error || "Failed to update profile");
    }
  };

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
    // {
    //   id: "settings",
    //   label: "Account Settings",
    //   icon: Settings,
    // },
  ];

  const handleMenuClick = (item) => {
    if (!item.href) {
      setActiveSection(item.id);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#f5ebda] flex items-center justify-center">
        <p className="font-manrope text-gray-500 font-medium">
          Loading account details...
        </p>
      </main>
    );
  }

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
                    {userInitial}
                  </span>
                </div>

                <div className="min-w-0">
                  <p className="truncate font-manrope text-sm font-bold text-[#572340]">
                    {userName}
                  </p>

                  <p className="truncate font-manrope text-[11px] text-[#603917]/50">
                    {userEmail}
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
                className="mt-2 flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 text-left text-[#8b183d] transition-colors hover:bg-[#8b183d]/5 cursor-pointer"
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
                        {userInitial}
                      </span>
                    </div>
{/* 
                    <button
                      type="button"
                      onClick={() => toast.info("Profile photo upload coming soon.")}
                      className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-pink-600 text-white shadow-sm cursor-pointer"
                      aria-label="Edit profile photo"
                    >
                      <Pencil className="h-3.5 w-3.5" />
                    </button> */}

                  </div>

                  <div>
                    <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8b183d]">
                      Welcome back
                    </p>

                    <h2 className="mt-1 font-cormorant text-3xl font-semibold text-[#572340] sm:text-4xl">
                      {userName}
                    </h2>

                    <p className="mt-1 font-manrope text-xs text-[#603917]/50">
                      Member since {memberSince}
                    </p>
                  </div>

                </div>

                <button
                  type="button"
                  onClick={handleOpenEditModal}
                  className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-pink-600 px-5 py-3 font-manrope text-xs font-semibold text-white shadow-[2px_3px_0px_#000] transition-all hover:bg-[#60b396] hover:shadow-[3px_4px_0px_#000] cursor-pointer sm:self-auto"
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
                value={stats?.totalOrders ?? 0}
              />

              <StatCard
                icon={Truck}
                label="In Transit"
                value={stats?.inTransit ?? 0}
              />

              <StatCard
                icon={Heart}
                label="Wishlist"
                value={stats?.wishlist ?? 0}
              />

              <StatCard
                icon={MapPin}
                label="Addresses"
                value={stats?.addresses ?? 0}
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
                    value={userName}
                  />

                  <InfoField
                    icon={Mail}
                    label="Email Address"
                    value={userEmail}
                  />

                  <InfoField
                    icon={Phone}
                    label="Phone Number"
                    value={userPhone}
                  />

                  {/* <InfoField
                    icon={CalendarDays}
                    label="Date of Birth"
                    value="Not added"
                  /> */}

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
                    name={userName}
                    address="123, Your Street, Near Main Market"
                    city="Surat, Gujarat - 395001"
                    phone={userPhone}
                    defaultAddress
                  />

                  <AddressCard
                    title="Office"
                    name={userName}
                    address="45, Business Avenue"
                    city="Surat, Gujarat - 395007"
                    phone={userPhone}
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

      {/* ===============================================
          EDIT PROFILE MODAL
      =============================================== */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => !updating && setIsEditModalOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-lg rounded-3xl border border-[#603917]/15 bg-[#fdfaf3] p-6 sm:p-8 shadow-2xl z-10">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsEditModalOpen(false)}
              disabled={updating}
              className="absolute right-5 top-5 rounded-full p-2 text-[#603917]/60 hover:bg-[#603917]/10 hover:text-[#572340] transition-colors cursor-pointer disabled:opacity-50"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 border-b border-[#603917]/10 pb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-600 text-white shadow-sm">
                <Pencil className="h-5 w-5" />
              </div>
              <div>
                <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8b183d]">
                  Manage Account
                </p>
                <h2 className="font-cormorant text-2xl sm:text-3xl font-bold text-[#572340]">
                  Edit Profile
                </h2>
              </div>
            </div>

            {/* Error Message */}
            {updateError && (
              <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-700">
                {updateError}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleUpdateProfileSubmit} className="mt-5 space-y-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="profile-name"
                  className="mb-1.5 block font-manrope text-xs font-semibold uppercase tracking-wider text-[#603917]/75"
                >
                  Full Name <span className="text-pink-600">*</span>
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#603917]/40">
                    <UserRound className="h-4 w-4" />
                  </div>
                  <input
                    id="profile-name"
                    name="name"
                    type="text"
                    required
                    value={editFormData.name}
                    onChange={handleFormChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-2xl border border-[#603917]/20 bg-white py-3 pl-10 pr-4 font-manrope text-sm text-[#572340] placeholder:text-[#603917]/30 outline-none transition focus:border-pink-600 focus:ring-1 focus:ring-pink-600"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="profile-email"
                  className="mb-1.5 block font-manrope text-xs font-semibold uppercase tracking-wider text-[#603917]/75"
                >
                  Email Address <span className="text-pink-600">*</span>
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#603917]/40">
                    <Mail className="h-4 w-4" />
                  </div>
                  <input
                    id="profile-email"
                    name="email"
                    type="email"
                    required
                    value={editFormData.email}
                    onChange={handleFormChange}
                    placeholder="Enter your email address"
                    className="w-full rounded-2xl border border-[#603917]/20 bg-white py-3 pl-10 pr-4 font-manrope text-sm text-[#572340] placeholder:text-[#603917]/30 outline-none transition focus:border-pink-600 focus:ring-1 focus:ring-pink-600"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="profile-phone"
                  className="mb-1.5 block font-manrope text-xs font-semibold uppercase tracking-wider text-[#603917]/75"
                >
                  Phone Number
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#603917]/40">
                    <Phone className="h-4 w-4" />
                  </div>
                  <input
                    id="profile-phone"
                    name="phone"
                    type="tel"
                    value={editFormData.phone}
                    onChange={handleFormChange}
                    placeholder="Enter your phone number"
                    maxLength={15}
                    className="w-full rounded-2xl border border-[#603917]/20 bg-white py-3 pl-10 pr-4 font-manrope text-sm text-[#572340] placeholder:text-[#603917]/30 outline-none transition focus:border-pink-600 focus:ring-1 focus:ring-pink-600"
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  disabled={updating}
                  onClick={() => setIsEditModalOpen(false)}
                  className="rounded-full border border-[#603917]/20 bg-white px-5 py-2.5 font-manrope text-xs font-semibold text-[#603917] transition-all hover:bg-gray-100 cursor-pointer disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={updating}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-pink-600 px-6 py-2.5 font-manrope text-xs font-semibold text-white shadow-[2px_3px_0px_#000] transition-all hover:bg-[#60b396] hover:shadow-[3px_4px_0px_#000] cursor-pointer disabled:opacity-70"
                >
                  {updating ? (
                    <>
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      Updating...
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
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