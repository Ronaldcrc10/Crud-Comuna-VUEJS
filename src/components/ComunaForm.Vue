<template>
  <div>
    <h2>{{ comuna.id ? 'Editar Comuna' : 'Agregar Comuna' }}</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          v-model="comuna.nombre"
          required
        />
      </div>
      <button type="submit">{{ comuna.id ? 'Actualizar' : 'Guardar' }}</button>
      <button type="button" @click="$emit('cancel')">Cancelar</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    selectedComuna: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      comuna: this.selectedComuna
        ? { ...this.selectedComuna }
        : { id: null, nombre: '' },
    };
  },
  methods: {
    submitForm() {
      this.$emit('saveComuna', this.comuna);
    },
  },
};
</script>
