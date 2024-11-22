<template>
  <div>
    <button @click="showForm = true">Agregar Comuna</button>
    <ComunaForm
      v-if="showForm"
      :selectedComuna="selectedComuna"
      @saveComuna="saveComuna"
      @cancel="cancelForm"
    />
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="comuna in comunas" :key="comuna.id">
          <td>{{ comuna.id }}</td>
          <td>{{ comuna.nombre }}</td>
          <td>
            <button @click="editComuna(comuna)">Editar</button>
            <button @click="deleteComuna(comuna.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ComunaForm from './ComunaForm.vue';

export default {
  components: {
    ComunaForm,
  },
  data() {
    return {
      comunas: [
        { id: 1, nombre: 'Comuna 1' },
        { id: 2, nombre: 'Comuna 2' },
      ],
      showForm: false,
      selectedComuna: null,
    };
  },
  methods: {
    saveComuna(comuna) {
      if (comuna.id) {
        // Actualizar
        const index = this.comunas.findIndex((c) => c.id === comuna.id);
        this.$set(this.comunas, index, comuna);
      } else {
        // Agregar nueva
        comuna.id = this.comunas.length + 1;
        this.comunas.push(comuna);
      }
      this.showForm = false;
    },
    editComuna(comuna) {
      this.selectedComuna = { ...comuna };
      this.showForm = true;
    },
    deleteComuna(id) {
      this.comunas = this.comunas.filter((comuna) => comuna.id !== id);
    },
    cancelForm() {
      this.showForm = false;
      this.selectedComuna = null;
    },
  },
};
</script>
