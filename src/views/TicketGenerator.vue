<template>
  <app-bar />
  <v-container>
    <v-row>
        <v-card>
          <v-form v-model="valid">
            <v-text-field
              v-model="date"
              :rules="nameRules"
              :counter="10"
              label="Fecha aproximada de pago"
              required
              hide-details
            ></v-text-field>
            <v-text-field
              v-model="payment"
              :rules="nameRules"
              :counter="10"
              label="Cifra a pagar"
              required
              hide-details
            ></v-text-field>
            <v-switch
              v-model="selectedOption"
              hide-details
              true-value="Boleta"
              false-value="VEP"
              :label="`Pagara con ${selectedOption}`"
              id="vep-switch"
            ></v-switch>
            <v-btn type="submit" block class="mt-2">Submit</v-btn>
          </v-form>
        </v-card>
    </v-row>
  </v-container>
</template>

<script>
import AppBar from '@/components/AppBar.vue'

export default {
  name: 'PaymentSelection',
  components: {
    AppBar
  },
  props: {
    boleta: Boolean,
    vep: Boolean,
    error: Boolean,
    boletaLink: String,
    vepnumber: String
  },
  data() {
    return {
      panels: [
        // Definición de los paneles de métodos de pago
      ],
      showCheckbox: false, // Fecha de vencimiento
      paymentAmount: '$150.00', // Monto a abonar
      selectedOption: 'Boleta' // Opción seleccionada (Boleta por defecto)
    }
  },
  computed: {
    montoTotal() {
      return parseFloat(this.$route.params.montoTotal)
    },
    selectedDate() {
      return this.$route.params.selectedDate // Aquí obtendrás la fecha seleccionada
    }
  },
  methods: {
    labelStyle(option) {
      if (this.selectedOption === option) {
        return 'background-color: #2196F3; color: white; padding: 5px; border-radius: 4px;'
      }
      return 'background-color: #f0f0f0; padding: 5px; border-radius: 4px;'
    },
    async generatePayment() {
      console.log('Pago generado:', this.selectedOption)

      let props = {
        boleta: false,
        vep: false,
        error: false,
        boletaLink: '',
        vepnumber: ''
      }

      if (this.selectedOption === 'Boleta') {
        props.boletaLink = 'URL_DE_DESCARGA_DE_BOLETA'
        this.$router.push({ name: 'BoletaResponse', props })
      } else if (this.selectedOption === 'VEP') {
        props.vepnumber = 'NUMERO_DEL_VEP'
        this.$router.push({ name: 'VEPResponse', props })
      } else {
        props.error = true
        this.$router.push({ name: 'ErrorResponse', props })
      }
    }
    // Métodos para la selección de paneles
  }
}
</script>

<style scoped>
/* Estilos específicos para PaymentSelection */
</style>