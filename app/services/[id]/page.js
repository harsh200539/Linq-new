import React from "react";
import { Navbar } from "../../../src/Shared/navbar";
import Footer from "../../../src/Shared/footer";
import { ServiceDetail } from "../../../src/Services/ServiceDetail";
import { SERVICES_DATA } from "../../../src/lib/services-data";

export function generateStaticParams() {
    return Object.keys(SERVICES_DATA).map((id) => ({
        id: id,
    }));
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const service = SERVICES_DATA[id];

    if (!service) {
        return {
            title: "Service Not Found",
            description: "The requested service could not be found."
        };
    }

    return {
        title: `LINQ - ${service.title}`,
        description: service.description
    };
}

export default async function ServiceDynamicPage({ params }) {
    const resolvedParams = await params;
    const { id } = resolvedParams;

    return (
        <>
            <Navbar />
            <main>
                <ServiceDetail serviceId={id} />
            </main>
            <Footer />
        </>
    );
}
