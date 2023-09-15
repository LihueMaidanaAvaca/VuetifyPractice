<template>
  <app-bar/>
  <v-container fluid>

      <v-card class="mb-3" elevation="3">
        <v-card-title>Resumen</v-card-title>
          <v-row>
            <v-col cols="4">
              <v-card-subtitle>Deuda: {{ contract.deuda }}</v-card-subtitle>
              <v-card-subtitle>Intereses: {{ contract.intereses }}</v-card-subtitle>
              <v-card-subtitle>Total: {{ contract.total }}</v-card-subtitle>
            </v-col>
            <v-col cols="8">
              <v-card-subtitle>Próximo Vencimiento: {{ contract.proximoVencimiento }}</v-card-subtitle>
            </v-col>
          </v-row>
      </v-card>
      <v-card class="mb-3" elevation="3">
        <v-card-title>Mensaje fijo</v-card-title>
        <v-card-text>{{ mensaje }}</v-card-text>
      </v-card>
    
    
      <!-- ///////// -->
      <v-card class="mb-3" elevation="3">
        <v-card-title>Seleccione método de pago</v-card-title>
          <v-row>
            <v-col cols="12" md="8">
              <!-- Contenedor de los mensajes -->
              <!-- Contenido de los panels -->
              <v-card v-if="panels[0].isSelected" class="mb-3" elevation="3">
                <v-card-title>Pago Independiente</v-card-title>
                
                <v-card-text>
                  Contenido del método de pago: Pago Independiente.
                  <v-btn color="primary" @click="continueToGenerator">
                    Continuar
                  </v-btn>
                </v-card-text>
              </v-card>

              <!-- <v-card v-if="panels[1].isSelected" class="mb-3" elevation="3">
                <v-card-title>Seleccione las cuotas a abonar</v-card-title>
                <v-card-text>
                  Contenido del método de pago: Pago en cuotas fijas.
                </v-card-text>
              </v-card>
              <v-card v-if="panels[2].isSelected" class="mb-3" elevation="3">
                <v-card-title>Seleccione las cuotas a abonar</v-card-title>
                <v-card-text>
                  Contenido del método de pago: Pago en cuotas variables.
                </v-card-text>
              </v-card> -->
            </v-col>
            <v-col cols="12" md="4">
              <!-- Contenedor de los checkboxes -->
              <div class="d-flex flex-column">
                <v-checkbox
                  v-for="(panel, index) in panels"
                  :key="index"
                  v-model="panel.isSelected"
                  :label="panel.label"
                  @click="handleCheckboxClick(index)"
                ></v-checkbox>
              </div>
            </v-col>
          </v-row>
      </v-card>
  </v-container>
  
</template>

<script>
import mockData from "@/components/lists/mockData.json";
import { VDatePicker } from "vuetify/labs/VDatePicker";
import AppBar from '@/components/AppBar.vue';

export default {
  name: "PaymentSelector",
  // Propiedades, datos, métodos y más aquí
  props: {
    deuda: Number,
    intereses: Number,
    total: Number,
    proximoVencimiento: String,
    mensaje: String,
  },
  components: {
    VDatePicker,
    AppBar
  },

  data() {
    return {
      selectedDate: null,
      panels: [
        { label: "Pago Independiente", isSelected: false },
        // { label: "Pago en cuotas fijas", isSelected: false },
        // { label: "Pago en cuotas variables", isSelected: false },
      ],
    };
  },

  computed: {
    contract() {
      const contractId = parseInt(this.$route.params.id, 10);
      return mockData.find((contract) => contract.id === contractId) || {};
    },
  },

  methods: {
    handleDateChange(date) {
      this.selectedDate = date;
      console.log(this.selectedDate, "fecha introducida");
    },
    handleCheckboxClick(selectedIndex) {
      this.panels.forEach((panel, index) => {
        if (index !== selectedIndex) {
          panel.isSelected = false;
        }
      });
    },
    continueToGenerator() {
      // Obtén el monto total y la fecha del contrato
      const montoTotal = this.contract.total;

      // Redirige a la vista /generator con los parámetros
      this.$router.push({
        name: "TicketGenerator",
        params: { montoTotal, selectedDate: this.selectedDate },
      });
    },
  },
};
</script>

<style scoped>
/* Estilos específicos de este componente */
/* Cambia el color de fondo del datepicker */
.v-picker__body {
  background-color: #be2424;
}

/* Cambia el color del texto del datepicker */
.v-picker__body .v-btn__content {
  color: #333;
}

/* Cambia el color del botón de selección de fecha */
.v-picker__actions .v-btn {
  background-color: #007bff;
  color: #fff;
}

/* Cambia el color de fondo del día seleccionado */
.v-picker--date .v-btn--active {
  background-color: #007bff;
  color: #fff;
}
</style>
