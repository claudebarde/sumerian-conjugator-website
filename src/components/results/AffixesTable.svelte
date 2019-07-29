<script>
  export let affixes = [];
</script>

<style>
  table {
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #d9d9d9;
    text-align: center;
    padding: 4px;
  }

  tr:nth-child(odd) {
    background-color: #e8e8e8;
  }
</style>

<table>
  <tr>
    <th>Type</th>
    <th>Function</th>
    <th>Form</th>
    <th>Raw Form</th>
  </tr>
  {#each affixes as affix}
    <tr>
      <td>{affix.type}</td>
      <td>{affix.function}</td>
      <td>{affix.form || 'Ø'}</td>
      <td>{affix.rawForm || 'Ø'}</td>
    </tr>
  {/each}
</table>
