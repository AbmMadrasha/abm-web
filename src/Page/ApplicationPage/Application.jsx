import React,{useState} from 'react';

const Application = () => {

   const [formData, setFormData] = useState({
      studentName: "",
      dateOfBirth: "",
      grade: "",
      boarding: "",
      guardianName: "",
      mobile: "",
      gurdianRelation: "",
      declaration: false,
      // registrationDate: new Date().toLocaleDateString("en-CA"),
    });
  
    const [submitted, setSubmitted] = useState(false);
  
    const handleChange = (e) => {
      const { name, value, checked, type } = e.target;
  
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Connect your backend API here to save the registration.
      console.log("Registration Data:", formData);
      setSubmitted(true);
    };
  
    const inputClass =
      "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100";
  
    const labelClass ="mb-2 block text-sm font-semibold text-gray-700";
  
    if (submitted) {
      return (
        <main className="flex min-h-screen items-center justify-center bg-emerald-50 p-4">
          <section className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-xl sm:p-12">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl text-emerald-700">
              ✓
            </div>
  
            <h1 className="text-2xl font-bold text-emerald-900">
              Registration Submitted!
            </h1>
  
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Thank you for registering for the 2026–2027
              academic year.
            </p>
  
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-7 rounded-lg bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              Register Another Student
            </button>
          </section>
        </main>
      );
    }
  
    return (
      <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-gray-50 to-green-100 px-4 py-8 sm:py-12">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-xl shadow-emerald-900/5">
          {/* Header */}
          <header className="border-b border-emerald-100 bg-emerald-800 px-6 py-9 text-center text-white sm:px-10">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-3xl">
              ✦
            </div>
  
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-200">
              Madrasah Admissions
            </p>
  
            <h1 className="mt-3 text-2xl font-bold sm:text-3xl">
              New Student Registration
            </h1>
  
            <p className="mt-3 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-emerald-50">
              Academic Year: 2026–2027
            </p>
  
            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-emerald-100">
              Please fill in all the details accurately to
              complete the registration process.
            </p>
          </header>
  
          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="p-6 sm:p-10">
            {/* Student Information */}
            <section>
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 font-bold text-emerald-800">
                  01
                </span>
                <h2 className="text-lg font-bold text-gray-800">
                  Student Information
                </h2>
              </div>
  
              <div className="space-y-5">
                <div>
                  <label htmlFor="studentName" className={labelClass}>
                    Student's Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="studentName"
                    name="studentName"
                    type="text"
                    autoComplete="off"
                    placeholder="Enter student's full name"
                    value={formData.studentName}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>
  
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="dateOfBirth" className={labelClass}>
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="date"
                      max={new Date().toLocaleDateString("en-CA")}
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />
                  </div>
  
                  <div>
                    <label htmlFor="grade" className={labelClass}>
                      Grade / Class <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="grade"
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    >
                      <option value="">Select class</option>
                      <option value="Play">Play</option>
                      <option value="Nursery">Nursery</option>
                      <option value="KG">KG</option>
                      {Array.from({ length: 10 }, (_, i) => (
                        <option key={i + 1} value={`Class ${i + 1}`}>
                          Class {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
  
                <fieldset>
                  <legend className={labelClass}>
                    Boarding Facility <span className="text-red-500">*</span>
                  </legend>
  
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {["Yes", "No"].map((option) => (
                      <label
                        key={option}
                        className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition ${
                          formData.boarding === option
                            ? "border-emerald-600 bg-emerald-50 ring-1 ring-emerald-600"
                            : "border-gray-200 hover:border-emerald-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="boarding"
                          value={option}
                          checked={formData.boarding === option}
                          onChange={handleChange}
                          className="h-4 w-4 accent-emerald-700"
                          required
                        />
                        <span className="text-sm font-medium text-gray-700">
                          {option === "Yes"
                            ? "Yes, boarding required"
                            : "No, boarding not required"}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>
            </section>
  
            {/* Parent Information */}
            <section className="mt-9 border-t border-gray-100 pt-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 font-bold text-emerald-800">
                  02
                </span>
                <h2 className="text-lg font-bold text-gray-800">
                  Parent / Guardian Information
                </h2>
              </div>
  
              <div className=" space-y-5">

                
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Parent / Guardian Name */}
  <div className="w-full">
    <label htmlFor="guardianName" className={labelClass}>
      Parent / Guardian Name <span className="text-red-500">*</span>
    </label>

    <input
      id="guardianName"
      name="guardianName"
      type="text"
      placeholder="Enter parent or guardian's full name"
      value={formData.guardianName}
      onChange={handleChange}
      className={inputClass}
      required
    />
  </div>

  {/* Guardian-Student Relationship */}
  <div className="w-full">
    <label htmlFor="guardianRelationship" className={labelClass}>
      Guardian-Student Relationship{' '}
      <span className="text-red-500">*</span>
    </label>

    <select
      id="guardianRelationship"
      name="guardianRelationship"
      value={formData.guardianRelationship}
      onChange={handleChange}
      className={inputClass}
      required
    >
      <option value="">Select relationship</option>
      <option value="Father">Father</option>
      <option value="Mother">Mother</option>
      <option value="Brother">Grandfather</option>
      <option value="Sister">Grandmother</option>
      <option value="Uncle">Paternal Uncle</option>
      <option value="Aunt">Maternal Aunt</option>
      <option value="Grandfather">Brother</option>
      <option value="Grandmother">Sister</option>
      <option value="Legal Guardian">Legal Guardian</option>
      <option value="Other">Other</option>
    </select>
  </div>

  {/* Show text field when Other is selected */}
  {formData.guardianRelationship === 'Other' && (
    <div className="w-full md:col-span-2">
      <label htmlFor="otherRelationship" className={labelClass}>
        Please Specify Relationship{' '}
        <span className="text-red-500">*</span>
      </label>

      <input
        id="otherRelationship"
        name="otherRelationship"
        type="text"
        placeholder="Enter your relationship with the student"
        value={formData.otherRelationship}
        onChange={handleChange}
        className={inputClass}
        required
      />
    </div>
  )}
</div>


  
                <div>
                  <label htmlFor="mobile" className={labelClass}>
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="e.g. 01XXXXXXXXX"
                    pattern="[0-9+() -]{7,20}"
                    title="Enter a valid mobile number."
                    value={formData.mobile}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>

              </div>
            </section>
  
            {/* Declaration */}
            <section className="mt-9 border-t border-gray-100 pt-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 font-bold text-emerald-800">
                  03
                </span>
                <h2 className="text-lg font-bold text-gray-800">
                  Declaration
                </h2>
              </div>
  
              <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50/70 p-4 sm:p-5">
                <input
                  type="checkbox"
                  name="declaration"
                  checked={formData.declaration}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 shrink-0 accent-emerald-700"
                  required
                />
                <span className="text-sm leading-6 text-gray-700">
                  I hereby confirm that the information provided
                  is accurate and agree to abide by the Madrasah
                  rules and policies.
                </span>
              </label>
  
              {/* <div className="mt-5">
                <label htmlFor="registrationDate" className={labelClass}>
                  Registration Date <span className="text-red-500">*</span>
                </label>
                <input
                  id="registrationDate"
                  name="registrationDate"
                  type="date"
                  value={formData.registrationDate}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div> */}
            </section>
  
            {/* Submit */}
            <div className="mt-8">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-700 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-700/20 transition hover:-translate-y-0.5 hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-200"
              >
                Submit Registration
                <span aria-hidden="true">→</span>
              </button>
  
              <p className="mt-4 text-center text-xs text-gray-500">
                <span className="text-red-500">*</span> All fields are required.
              </p>
            </div>
          </form>
  
          <footer className="border-t border-gray-100 bg-gray-50 px-6 py-5 text-center text-xs text-gray-500">
            Madrasah Admissions · Academic Year 2026–2027
          </footer>
        </div>
      </main>
    );
};

export default Application;