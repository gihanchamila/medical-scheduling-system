export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
      <h1 className="text-5xl font-bold tracking-tight text-primary sm:text-7xl">
        Healthcare, simplified.
      </h1>
      <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl">
        Manage your appointments, connect with doctors, and take control of your
        health journey with Cura.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <button className="rounded-md bg-primary px-6 py-3 text-white font-semibold">
          Book an Appointment
        </button>
        <button className="text-sm font-semibold leading-6 text-foreground">
          Learn more <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
