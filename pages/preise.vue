<template>
    <div class="w-2/3 grid grid-cols-4 mx-auto gap-x-4">
        <PriceColumn title="Einzelnachhilfe" duration="60 Minuten/Einheit" price="80€ pro Monat">
            <p>
                fächerübergreifende,<br /> individuelle Lernhilfe
            </p>
        </PriceColumn>
        <PriceColumn title="Lerncoaching/Lerntherapie" duration="60 Minuten/Einheit" price="50€ pro Stunde">
            <p>
                ​Die Ursachen für Lernschwierigkeiten erkennen und bearbeiten, ganz individuell und persönlich
            </p>
        </PriceColumn>
        <PriceColumn title="Lernen mit System" duration="12 x 90 Minuten" price="150€ pro Kurs">
            <p>
                ​Erlernen unterschiedlicher Techniken zum nachhaltigen, selbstständigen Lernen
            </p>
        </PriceColumn>
        <PriceColumn title="Aktives Lernen" duration="8 x 90 Minuten" price="120€ pro Stunde">
            <p>
                ​Aktives Lernen durch Bewegung und Koordination,
                Achtsamkeitsübungen zur Verbesserung von Konzentration und Fokus
            </p>
        </PriceColumn>
    </div>
    <div class="flex items-center justify-center">
        <NuxtLink to="/kontakt" class="btn btn-primary">Kontakt</NuxtLink>
    </div>
</template>