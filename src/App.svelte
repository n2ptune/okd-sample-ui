<script lang="ts">
  import { onMount } from "svelte"
  import { readAll, write } from "./lib/api"

  let isLoading = false
  let text = ""
  let notes = []

  async function handleKeyPressEvent(event: KeyboardEvent) {
    if (event.key === "Enter") {
      await write({ value: text })
      await fetchNotes()
      ;(event.target as any).focus()
    }
  }

  async function fetchNotes() {
    try {
      isLoading = true

      const { data } = await readAll()
      notes = data
      text = ""
    } catch (error) {
      console.log(error)
    } finally {
      isLoading = false
    }
  }

  onMount(() => {
    fetchNotes()
  })
</script>

<main class="container mx-auto px-2 py-16">
  <section class="mb-24">
    <input
      bind:value={text}
      disabled={isLoading}
      on:keypress={handleKeyPressEvent}
      type="text"
      class="rounded border border-gray-200 p-2 w-full focus:outline-none focus:ring-2 focus:border-purple-300 focus:ring-purple-300 transition-all duration-300"
    />
  </section>
  {#if isLoading}
    <div>Loading...</div>
  {:else if notes.length}
    <table class="table-auto mt-12 w-full shadow-lg shadow-slate-100 border border-slate-100">
      <thead>
        <tr class="text-left">
          <th>No</th>
          <th>Todo</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {#each notes as note}
          <tr>
            <td>{note.id}</td>
            <td>{note.value}</td>
            <td>{note.createDate || ''}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  {:else}
    TODO 입력 바람
  {/if}
</main>

<style>
  table thead tr > * {
    @apply pb-4 py-12 px-12;
  }

  table tbody tr > * {
    @apply py-4 px-12;
  }

  table tbody tr:last-child > * {
    @apply pb-12;
  }
</style>