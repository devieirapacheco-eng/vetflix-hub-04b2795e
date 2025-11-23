import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calculator } from "lucide-react";

interface Drug {
  name: string;
  doseMin: number;
  doseMax: number;
  defaultConc: number;
  obs: string;
}

interface DrugsDB {
  [key: string]: Drug;
}

const drugsDB: DrugsDB = {
  succinilcolina: {
    name: "Succinilcolina",
    doseMin: 0.3,
    doseMax: 1.1,
    defaultConc: 20,
    obs: "Despolarizante. Cuidado com bradicardia e hipercalemia.",
  },
  atracurio: {
    name: "Atracúrio",
    doseMin: 0.2,
    doseMax: 0.5,
    defaultConc: 10,
    obs: "Não despolarizante. Metabolismo de Hofmann (independe de fígado/rins).",
  },
  rocuronio: {
    name: "Rocurônio",
    doseMin: 0.4,
    doseMax: 0.6,
    defaultConc: 10,
    obs: "Início rápido. Reversão ideal com Sugammadex.",
  },
  neostigmina: {
    name: "Neostigmina (Reversão)",
    doseMin: 0.04,
    doseMax: 0.05,
    defaultConc: 0.5,
    obs: "Obrigatório associar com Atropina/Glicopirrolato.",
  },
};

interface BNMCalculatorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BNMCalculator = ({ open, onOpenChange }: BNMCalculatorProps) => {
  const [selectedDrug, setSelectedDrug] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [concentration, setConcentration] = useState<string>("");
  const [result, setResult] = useState<any>(null);

  const calculateDose = () => {
    if (!selectedDrug || !weight) {
      return;
    }

    const drug = drugsDB[selectedDrug];
    const weightKg = parseFloat(weight);
    const userConcentration = concentration ? parseFloat(concentration) : drug.defaultConc;

    if (userConcentration <= 0) {
      return;
    }

    const doseMgMin = weightKg * drug.doseMin;
    const doseMgMax = weightKg * drug.doseMax;
    const volMlMin = doseMgMin / userConcentration;
    const volMlMax = doseMgMax / userConcentration;

    setResult({
      drug: drug.name,
      weight: `${weightKg} kg`,
      concentrationUsed: `${userConcentration} mg/mL`,
      doseMg: `${doseMgMin.toFixed(2)} a ${doseMgMax.toFixed(2)} mg`,
      volumeMl: `${volMlMin.toFixed(2)} a ${volMlMax.toFixed(2)} mL`,
      note: drug.obs,
    });
  };

  const handleReset = () => {
    setSelectedDrug("");
    setWeight("");
    setConcentration("");
    setResult(null);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-bnmGreen" />
            Calculadora BNM
          </DialogTitle>
          <DialogDescription>
            Cálculo de dosagem de bloqueadores neuromusculares
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="drug">Selecione o medicamento</Label>
            <Select value={selectedDrug} onValueChange={setSelectedDrug}>
              <SelectTrigger id="drug">
                <SelectValue placeholder="Escolha um BNM..." />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(drugsDB).map(([key, drug]) => (
                  <SelectItem key={key} value={key}>
                    {drug.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="weight">Peso do animal (kg)</Label>
            <Input
              id="weight"
              type="number"
              placeholder="Ex: 20"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="concentration">
              Concentração do frasco (mg/mL)
              <span className="text-muted-foreground text-xs ml-2">
                {selectedDrug && `(Padrão: ${drugsDB[selectedDrug].defaultConc} mg/mL)`}
              </span>
            </Label>
            <Input
              id="concentration"
              type="number"
              placeholder={selectedDrug ? `Padrão: ${drugsDB[selectedDrug].defaultConc}` : "Ex: 10"}
              value={concentration}
              onChange={(e) => setConcentration(e.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <Button
              onClick={calculateDose}
              className="flex-1 bg-bnmGreen text-bnmGreen-foreground hover:bg-bnmGreen/90"
              disabled={!selectedDrug || !weight}
            >
              Calcular
            </Button>
            <Button onClick={handleReset} variant="outline">
              Limpar
            </Button>
          </div>

          {result && (
            <div className="mt-4 p-4 bg-card border border-border rounded-lg space-y-2">
              <h3 className="font-semibold text-bnmGreen">{result.drug}</h3>
              <div className="text-sm space-y-1">
                <p>
                  <span className="text-muted-foreground">Peso:</span> {result.weight}
                </p>
                <p>
                  <span className="text-muted-foreground">Concentração:</span> {result.concentrationUsed}
                </p>
                <p>
                  <span className="text-muted-foreground">Dose:</span> {result.doseMg}
                </p>
                <p className="font-semibold text-bnmGreen">
                  <span className="text-muted-foreground font-normal">Volume:</span> {result.volumeMl}
                </p>
              </div>
              <div className="mt-3 p-2 bg-muted/50 rounded text-xs text-muted-foreground">
                <strong>Obs:</strong> {result.note}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BNMCalculator;
