import PageHeader from "@/components/common/PageHeader";
import Metrics from "@/components/Pages/AdminGuests/Metrics";
import Tables from "@/components/Pages/AdminGuests/Tables";

const Guests = () => {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Guest Management"
        description="View and manage guest profiles, history, and preferences."
        primary={{
          title: "Add New Guest",
          action: () => {},
        }}
        refresh={{ action: () => {}, isLoading: false }}
      />

      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm">
        <Metrics />
        <Tables />
      </div>
    </div>
  );
};

export default Guests;
