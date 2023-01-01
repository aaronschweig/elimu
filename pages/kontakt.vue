<script setup lang="ts">

function handleSubmit(e: Event) {
    const formData = new FormData(e.target as HTMLFormElement)

    let content = formData.get('content')!.toString()
    content += "\n\nVielen Dank und mit freundlichen Grüßen,\n" + formData.get('vorname')!.toString() + " " + formData.get('nachname')!.toString()

    const a = document.createElement('a')
    a.href = `mailto:jessica.schweig@web.de?subject=${encodeURIComponent('Kontaktaufnahme Elimu')}&body=${encodeURIComponent(content)}`
    a.click()
    a.remove()
}
</script>

<template>
    <h1 class="text-3xl font-semibold text-center">Kontaktformular</h1>
    <form @submit.prevent="handleSubmit" class="mx-4 mt-8 space-y-4 xl:mx-auto xl:w-1/2">
        <div class="form-control">
            <label for="vorname" class="label">
                <span class="label-text">Vorname*</span>
            </label>
            <input type="text" autocomplete="given-name" class="input input-bordered" id="vorname" name="vorname"
                required>
        </div>
        <div class="form-control">
            <label for="nachname" class="label">
                <span class="label-text">Nachname*</span>
            </label>
            <input type="text" autocomplete="family-name" class="input input-bordered" id="nachname" name="nachname"
                required>
        </div>
<!--         <div class="form-control">
            <label for="email" class="label">
                <span class="label-text">Email*</span>
            </label>
            <input type="email" autocomplete="email" class="input input-bordered" id="email" name="email" required>
        </div> -->

        <div class="form-control">
            <label for="content" class="label">
                <span class="label-text">Ihre Nachricht:</span>
            </label>
            <textarea id="content" name="content" class="textarea textarea-bordered" cols="30" rows="5"></textarea>
        </div>
        <button class="btn btn-primary w-full" type="submit">Absenden</button>
    </form>
</template>